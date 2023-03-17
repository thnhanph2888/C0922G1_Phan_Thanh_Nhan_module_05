package com.example.car_back_end.repository;
import com.example.car_back_end.model.Departure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDepartureRepository extends JpaRepository<Departure, Integer> {
}
