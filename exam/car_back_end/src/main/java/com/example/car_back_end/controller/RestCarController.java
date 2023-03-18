package com.example.car_back_end.controller;
import com.example.car_back_end.model.Car;
import com.example.car_back_end.model.CarType;
import com.example.car_back_end.model.Departure;
import com.example.car_back_end.service.ICarService;
import com.example.car_back_end.service.ICarTypeService;
import com.example.car_back_end.service.IDepartureService;
import com.example.car_back_end.service.IDestination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class RestCarController {
    @Autowired
    private ICarService carService;
    @Autowired
    private ICarTypeService carTypeService;
    @Autowired
    private IDepartureService departureService;
    @Autowired
    private IDestination destination;

    @GetMapping("/car/list")
    public ResponseEntity<Page<Car>> findAllPageCar(Pageable pageable) {
        Page<Car> carList = carService.findAllPage(pageable);
            return new ResponseEntity<>(carList, HttpStatus.OK);
    }

    @GetMapping("address/list")
    public ResponseEntity<List<Departure>> findAllAddress() {
        List<Departure> departuresList = departureService.findAll();
        return new ResponseEntity<>(departuresList, HttpStatus.OK);
    }

    @GetMapping("carType/list")
    public ResponseEntity<List<CarType>> findAllCarType() {
        List<CarType> carTypeList = carTypeService.findAll();
        return new ResponseEntity<>(carTypeList, HttpStatus.OK);
    }

    @PostMapping("/car/add")
    public ResponseEntity addCar(Car car) {
        carService.add(car);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/car/edit/{id}")
    public ResponseEntity editCar(@PathVariable("id")int id, Car car) {
        carService.update(id, car);
        return new ResponseEntity(HttpStatus.OK);
    }
    @DeleteMapping("/car/list/{id}")
    public ResponseEntity deleteCar(@PathVariable("id")int id) {
        carService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
