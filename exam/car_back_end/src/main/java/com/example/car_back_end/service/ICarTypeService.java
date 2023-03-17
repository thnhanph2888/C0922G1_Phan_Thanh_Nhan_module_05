package com.example.car_back_end.service;

import com.example.car_back_end.model.CarType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarTypeService {
    Page<CarType> findAllPage(Pageable pageable);
}
