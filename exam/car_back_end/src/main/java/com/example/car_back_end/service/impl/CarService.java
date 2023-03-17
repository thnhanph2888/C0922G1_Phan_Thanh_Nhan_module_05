package com.example.car_back_end.service.impl;

import com.example.car_back_end.model.Car;
import com.example.car_back_end.repository.ICarRepository;
import com.example.car_back_end.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository carRepository;

    @Override
    public Page<Car> findAllPage(Pageable pageable) {
        return carRepository.findAllPage(pageable);
    }

    @Override
    public boolean update(int id, Car car) {
        return carRepository.update(id
                , car.getLicensePlates()
                , car.getCarType().getId()
                , car.getGarage()
                , car.getPhone()
                , car.getEmail()
                , car.getDepartureTime().toString()
                , car.getArrivalTime().toString()
                , car.getDeparture().getId()
                , car.getDestination().getId());
    }

    @Override
    public boolean add(Car car) {
        return carRepository.add(car.getLicensePlates()
                , car.getCarType().getId()
                , car.getGarage()
                , car.getPhone()
                , car.getEmail()
                , car.getDepartureTime().toString()
                , car.getArrivalTime().toString()
                , car.getDeparture().getId()
                , car.getDestination().getId());
    }

    @Override
    public boolean delete(int id) {
        return carRepository.delete(id);
    }
}
