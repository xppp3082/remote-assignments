package com.example.assignment3;


import com.example.assignment3.entity.User;
import com.example.assignment3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class RegisterController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("user", new User());
        return "home";
    }

    @PostMapping("/signup")
    public String signUp(@ModelAttribute User user, Model model) {
        if (!userRepository.findByEmail(user.getEmail()).isPresent()) {
            userRepository.save(user);
            model.addAttribute("message", "Signed up successfully!");
            return "home";
        } else {
            model.addAttribute("error", "Email already registered.");
            return "home";
        }
    }

    @PostMapping("/signin")
    public String signIn(@ModelAttribute User user, Model model) {
        Optional<User> existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (existingUser.isPresent()) {
            model.addAttribute("message", "註冊成功!");
            return "redirect:/member";
        } else {
            model.addAttribute("error", "無效的帳號或密碼.");
            return "home";
        }
    }

    @GetMapping("/member")
    public String member() {
        return "member";
    }
}
