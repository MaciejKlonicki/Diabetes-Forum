package com.maciejklonicki.org.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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

    public Role(Long id, @NotNull String name) {
        this.id = id;
        this.name = name;
    }
}
