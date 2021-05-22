package com.ujianRN;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ujianRN.entity.Laporan;
import com.ujianRN.entity.User;
import com.ujianRN.repository.LaporanRepository;
import com.ujianRN.repository.UserRepository;

@SpringBootApplication
public class UjianAkhirRnApplication implements CommandLineRunner{
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	LaporanRepository laporanRepo;
	

	public static void main(String[] args) {
		SpringApplication.run(UjianAkhirRnApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
//		User user = new User();
//		user.setName("Raka");
//		user.setEmail("raka@email.com");
//		user.setPhone(1111);
//		user.setAddress("Cijantung");
//		this.userRepo.save(user);
//		
//		Laporan laporan = new Laporan();
//		laporan.setNamaPelapor("Raka");
//		laporan.setKejadian("Kecelakaan");
//		laporan.setAlamat("jl.ciracas");
//		laporan.setKeterangan("Kecelakaan motor, luka ringan");
//		this.laporanRepo.save(laporan);
		
	}

	

}
