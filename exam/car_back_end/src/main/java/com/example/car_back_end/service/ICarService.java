package com.example.car_back_end.service;

import com.example.car_back_end.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {
    Page<Car> findAllPage(Pageable pageable);
    boolean update(int id, Car car);
    boolean add(Car car);
    boolean delete(int id);
}
