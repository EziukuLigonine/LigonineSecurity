package lt.akademija.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.User;
import lt.akademija.Service.DoctorService;

@RestController
@Api(value = "Doctor")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	
	@GetMapping(value = "/doctors")
	@ApiOperation(value = "Get doctor list", notes = "Returns list of all doctors")
	public List<User> getDoctors(@ApiParam(value = "Search doctor")
									@RequestParam(value = "search", required = false) String search ){
		return doctorService.getDoctors(search);
	}
	
	@GetMapping(value = "/doctors/{id}")
	@ApiOperation(value = "Get doctor", notes = "Returns a single doctor")
	public User getDoctor(@PathVariable String id) {
		return doctorService.getDoctor(id);
	}
	
	@PostMapping(value = "admin/doctors/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create doctors", notes = "Creates doctor")
	public void createDoctor(@RequestBody CreateDoctorCmd cmd) {
		doctorService.createDoctor(cmd);
	}
	
	@PutMapping(value = "/doctors/{id}")
	@ApiOperation(value = "Update doctor", notes = "Updates doctor details")
	public void updateDoctor(@RequestBody CreateDoctorCmd cmd, @PathVariable String id) {
		doctorService.updateDoctor(cmd, id);
	}
	
	@DeleteMapping(value = "/doctors/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete doctor doctor", notes = "Removes doctor doctor")
	public void deleteDoctor(@PathVariable String id) {
		doctorService.deleteDoctor(id);
	}
}

