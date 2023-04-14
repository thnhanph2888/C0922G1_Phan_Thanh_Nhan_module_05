package com.example.car_back_end.controller;
import com.example.car_back_end.dto.CarDto;
import com.example.car_back_end.model.Car;
import com.example.car_back_end.model.CarType;
import com.example.car_back_end.model.Departure;
import com.example.car_back_end.service.ICarService;
import com.example.car_back_end.service.ICarTypeService;
import com.example.car_back_end.service.IDepartureService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
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

    @GetMapping("/car/list")
    public ResponseEntity<Page<Car>> findAllPageCar(@PageableDefault(page = 0, size = 1)Pageable pageable) {
        Page<Car> carList = carService.findAllPage(pageable);
            return new ResponseEntity<>(carList, HttpStatus.OK);
    }

    @GetMapping("/address/list")
    public ResponseEntity<List<Departure>> findAllAddress() {
        List<Departure> departuresList = departureService.findAll();
        return new ResponseEntity<>(departuresList, HttpStatus.OK);
    }

    @GetMapping("/carType/list")
    public ResponseEntity<List<CarType>> findAllCarType() {
        List<CarType> carTypeList = carTypeService.findAll();
        return new ResponseEntity<>(carTypeList, HttpStatus.OK);
    }

    @PostMapping("/car/list/add")
    public ResponseEntity<?> addCar(@Validated @RequestBody CarDto carDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {

        }
        Car car = new Car();
        BeanUtils.copyProperties(carDto, car);
        carService.add(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/car/list/edit/{id}")
    public ResponseEntity editCar(@PathVariable("id")int id,@RequestBody Car car) {
        carService.update(id, car);
        return new ResponseEntity(HttpStatus.OK);
    }
    @DeleteMapping("/car/list/delete/{id}")
    public ResponseEntity<Boolean> deleteCar(@PathVariable("id")int id) {
        return new ResponseEntity<>(carService.delete(id), HttpStatus.OK);
    }
    @GetMapping("/car/list/find/{id}")
    public ResponseEntity<Car> findById(@PathVariable("id")int id) {
         Car car = carService.findById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }
}
