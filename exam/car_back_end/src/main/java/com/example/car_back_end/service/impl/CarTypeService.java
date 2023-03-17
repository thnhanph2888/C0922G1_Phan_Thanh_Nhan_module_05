package com.example.car_back_end.service.impl;

import com.example.car_back_end.model.CarType;
import com.example.car_back_end.repository.ICarRepository;
import com.example.car_back_end.repository.ICarTypeRepository;
import com.example.car_back_end.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarTypeService implements ICarTypeService {
    @Autowired
    private ICarTypeRepository carTypeRepository;
    @Override
    public Page<CarType> findAllPage(Pageable pageable) {
        return carTypeRepository.findAllPage(pageable);
    }
}
