package com.example.assignment;


import org.springframework.web.bind.annotation.*;

//@RestController
@RestController
@RequestMapping()
public class Data {
    @GetMapping("data")
    public String calculate(@RequestParam(value = "number", required = false) String number) {
        //下次要嘗試將Class分成 Controller、Service、Dao層進行處理
        int output = 0;
        if (number == null) {
            return "Lack of Parameter!";
        } else {
            try {
                int endNum = Integer.parseInt(number);
                for (int i = 0; i <= endNum; i++) {
                    output += i;
                }
            } catch (NumberFormatException e) {
                return "Wrong Parameter!";
            }
        }
        return String.valueOf(output);
    }
}
