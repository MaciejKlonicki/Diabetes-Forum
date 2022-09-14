package com.maciejklonicki.org.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(targetEntity = Users.class, mappedBy = "role",
        fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Users> users;

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }
}
