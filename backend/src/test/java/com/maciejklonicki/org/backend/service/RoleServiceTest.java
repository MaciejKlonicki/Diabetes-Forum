package com.maciejklonicki.org.backend.service;

import com.maciejklonicki.org.backend.model.Role;
import com.maciejklonicki.org.backend.repository.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class RoleServiceTest {

    @Mock private RoleRepository roleRepository;
    @InjectMocks private RoleService underTest;

    @BeforeEach
    public void setUp() {
        underTest = new RoleService(roleRepository);
    }

    @Test
    void isRepoNotEmpty() {
        assertThat(roleRepository).isNotNull();
    }

    @Test
    void canFindAll() {
        //when
        underTest.findAll();
        //then
        verify(roleRepository).findAll();
    }

    @Test
    void canFindById() {
        //when
        underTest.findById(3L);
        //then
        verify(roleRepository).findById(3L);
    }

    @Test
    void canFindByName() {
        //when
        underTest.findByName("John");
        //then
        verify(roleRepository).findByName("John");
    }

    @Test
    void canSaveOrUpdate() {
        //given
        Role role = new Role(
                "Moderator"
        );
        //when
        underTest.saveOrUpdate(role);
        //then
        ArgumentCaptor<Role> roleArgumentCaptor = ArgumentCaptor.forClass(Role.class);
        verify(roleRepository).saveAndFlush(roleArgumentCaptor.capture());
        Role captureRoles = roleArgumentCaptor.getValue();
        assertThat(captureRoles).isEqualTo(role);
    }

    @Test
    void canDeleteById() {
        //when
        underTest.deleteById(10L);
        //then
        verify(roleRepository).deleteById(10L);
    }
}