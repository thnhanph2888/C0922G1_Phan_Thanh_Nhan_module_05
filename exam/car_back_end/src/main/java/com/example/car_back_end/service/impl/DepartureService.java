package com.example.car_back_end.service.impl;

import com.example.car_back_end.model.Departure;
import com.example.car_back_end.repository.IDepartureRepository;
import com.example.car_back_end.service.IDepartureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartureService implements IDepartureService {
    @Autowired
    private IDepartureRepository departureRepository;
    @Override
    public List<Departure> findAll() {
        return departureRepository.findAll();
    }
}
