package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class ApiController {

    @GetMapping("/hello")
    public Map<String, String> getHello() {
        return Map.of("message", "Connected successfully to Java Spring Boot!");
    }
}
