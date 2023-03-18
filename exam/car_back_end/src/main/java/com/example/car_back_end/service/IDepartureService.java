package com.example.car_back_end.service;

import com.example.car_back_end.model.Departure;

import java.util.List;

public interface IDepartureService {
    List<Departure> findAll();
}
