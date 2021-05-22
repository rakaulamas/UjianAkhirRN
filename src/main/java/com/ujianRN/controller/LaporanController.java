package com.ujianRN.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ujianRN.entity.Laporan;
import com.ujianRN.entity.User;
import com.ujianRN.repository.LaporanRepository;



@RestController
@RequestMapping("/laporan")
public class LaporanController {
			@Autowired 
			LaporanRepository laporanRepo;
			
		@GetMapping("/")
		public List<Laporan> getAll() {
		return(List<Laporan>) laporanRepo.findAll();
		}	
			
			
}
