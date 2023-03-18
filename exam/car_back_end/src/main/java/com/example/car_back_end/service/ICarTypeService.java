package com.example.car_back_end.service;
import com.example.car_back_end.model.CarType;

import java.util.List;

public interface ICarTypeService {
    List<CarType> findAll();
}
