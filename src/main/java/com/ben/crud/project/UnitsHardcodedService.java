package com.ben.crud.project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UnitsHardcodedService {
    private static List<Unit> units = new ArrayList<>();
    private static long idCounter = 0;
  
    static {
      units.add(new Unit(++idCounter, "Pecorine", true));
      units.add(new Unit(++idCounter, "Kokkoro", true));
      units.add(new Unit(++idCounter, "Kyaru", true));
    }
  
    public List<Unit> findAll() {
      return units;
    }

    // public Unit deleteById(long id) {
    //   Unit unit = findById(id);
  
    //   if (unit == null)
    //     return null;
  
    //   if (units.remove(unit)) {
    //     return unit;
    //   }
  
    //   return null;
    // }

    public Unit findById(long id) {
      for (Unit unit: units) {
        if (unit.getId() == id) {
          return unit;
        }
      }
      return null;
    }
  }
