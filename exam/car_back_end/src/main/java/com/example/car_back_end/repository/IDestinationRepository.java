package com.example.car_back_end.repository;

import com.example.car_back_end.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDestinationRepository extends JpaRepository<Destination, Integer> {
}
