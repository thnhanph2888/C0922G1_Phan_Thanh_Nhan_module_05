package com.example.car_back_end.service.impl;

import com.example.car_back_end.model.CarType;
import com.example.car_back_end.repository.ICarTypeRepository;
import com.example.car_back_end.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarTypeService implements ICarTypeService {
    @Autowired
    private ICarTypeRepository carTypeRepository;
    @Override
    public List<CarType> findAll() {
        return carTypeRepository.findAll();
    }
}
