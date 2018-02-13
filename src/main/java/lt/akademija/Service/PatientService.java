package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreatePatientCmd;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Repository.PatientRepository;
import lt.akademija.Repository.PrescriptionRepository;
import lt.akademija.Repository.RecordRepository;
import lt.akademija.Repository.UserRepository;

@Service
public class PatientService implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;

	
	@Transactional
	public List<Patient> getPatients(String search){
		return search == null ? patientRepository.findAll() : patientRepository.findByUsername(search); //reikia filtruoti tik aktarus. 
	}
	
	@Transactional
	public User getPatient(@PathVariable String id) {
		return userRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	@Transactional
	public List<Record> getPatientRecords(@PathVariable String id) {
		return recordRepository.findByPersonalId(patientRepository.getOne(Long.parseLong(id)).getPersonalId());
	}
	
	@Transactional
	public List<Prescription> getPatientPrescriptions(@PathVariable String id) {
		return prescriptionRepository.findByPersonalId(patientRepository.getOne(Long.parseLong(id)).getPersonalId());
	}
	
	@Transactional
	public void createPatient(@RequestBody CreatePatientCmd cmd) {
		User patient = new Patient();
		patient.setName(cmd.getName());
		patient.setSurname(cmd.getSurname());
		patient.setUsername(cmd.getUsername());
		patient.setPassword(cmd.getPassword());
		patient.setDateOfBirth(cmd.getDateOfBirth());
		patient.setPersonalId(cmd.getPersonalId());
		patient.setDoctorUsername(cmd.getDoctorUsername());
		userRepository.save(patient);
	}
	
	@Transactional 
	public void updatePatient(@RequestBody CreatePatientCmd cmd, @PathVariable String id) {
		User patient = userRepository.getOne(Long.parseLong(id));
		if(patient != null) {
			BeanUtils.copyProperties(cmd, patient);
			userRepository.save(patient);
		}
	}
	
	@Transactional
	public void deletePatient(@PathVariable String id) {
		userRepository.delete(Long.parseLong(id));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = findByUsername(username);
		if(user == null)
			throw new UsernameNotFoundException(username + " not found.");
			return new org.springframework.security.core.userdetails.User(
					user.getUsername(),
					user.getPassword(),
					AuthorityUtils.createAuthorityList(
							new String[] { "ROLE_" + user.getRole()}));
	}
	
}
