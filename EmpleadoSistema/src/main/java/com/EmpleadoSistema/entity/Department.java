package com.EmpleadoSistema.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String branch;

    @ManyToOne
    @JoinColumn(name = "id_employee", nullable = false)
    private Employee employee;
}
