package lt.akademija.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.akademija.Model.User;

public interface UserRepository extends JpaRepository <User, Long> {
	
	List<User> findByUsername(String search);


}
