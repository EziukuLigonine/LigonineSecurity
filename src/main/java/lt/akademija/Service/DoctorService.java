package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.Doctor;
import lt.akademija.Model.User;
import lt.akademija.Repository.UserRepository;

@Service
public class DoctorService {
	
	@Autowired
	private UserRepository userRepository;

	
	@Transactional
	public List<User> getDoctors(String search){
		return search == null ? userRepository.findAll() : userRepository.findByUsername(search); //reikia filtruoti tik aktarus. 
	}
	
	@Transactional
	public User getDoctor(@PathVariable String id) {
		return userRepository.getOne(Long.parseLong(id));
	}
	
	@Transactional
	public void createDoctor(@RequestBody CreateDoctorCmd cmd) {
		User doctor = new Doctor();
		doctor.setName(cmd.getName());
		doctor.setSurname(cmd.getSurname());
		doctor.setUsername(cmd.getUsername());
		doctor.setPassword(cmd.getPassword());
		doctor.setSpecialisation(cmd.getSpecialisation());
		userRepository.save(doctor);
	}
	
	@Transactional 
	public void updateDoctor(@RequestBody CreateDoctorCmd cmd, @PathVariable String id) {
		User doctor = userRepository.getOne(Long.parseLong(id));
		if(doctor != null) {
			BeanUtils.copyProperties(cmd, doctor);
			userRepository.save(doctor);
		}
	}
	
	@Transactional
	public void deleteDoctor(@PathVariable String id) {
		userRepository.delete(Long.parseLong(id));
	}

}