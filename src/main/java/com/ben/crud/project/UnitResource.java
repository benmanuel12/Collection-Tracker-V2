package com.ben.crud.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class UnitResource {

  @Autowired
  private UnitsHardcodedService unitManagementService;

  @GetMapping("/units")
  public List<Unit> getAllUnits() {
    return unitManagementService.findAll();
  }

  // @GetMapping("/units/{id}")
  // public Unit getUnit(@PathVariable long id) {
  //   return unitManagementService.findById(id);
  // } 

  // @DeleteMapping("/delete/{id}")
  // public ResponseEntity<Void> deleteUnit(@PathVariable long id) {

  //   Unit unit = unitManagementService.deleteById(id);

  //   if (unit != null) {
  //     return ResponseEntity.noContent().build();
  //   }

  //   return ResponseEntity.notFound().build();
  // }
}
