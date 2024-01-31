package com.example.assignment;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.UnsupportedEncodingException;
import java.util.Base64;


//@RestController
@RequestMapping
@Controller//為了進行頁面渲染，將RestController改成Controller以回傳靜態頁面
public class CookieController {
    //不設定default value確定一開始不會找到cookie Name，或設定default為空
    @GetMapping("/myName")
    public String myName(@CookieValue(value = "name", defaultValue = "") String userName, Model model) {
        if (!userName.isEmpty()) {
            model.addAttribute("message", "Hello, " + userName + "!");
        } else {
            model.addAttribute("message", "");
        }
        //找不到的話，在後端渲染myName.html template
        return "myName";
    }

    @GetMapping("/trackName")
    public String setCookie(@RequestParam(value = "name", required = false) String userName, HttpServletResponse response) {
        // 創造一個帶有User輸入值的Cookie
        try {
            String encodedUserName = Base64.getEncoder().encodeToString(userName.getBytes("UTF-8"));
            Cookie cookie = new Cookie("name", userName);

            // 設置過期時間，若無設置時間，其生命週期將持續到Session 過期為止
            cookie.setMaxAge(7 * 24 * 60 * 60);
            // Add the cookie to the response
            response.addCookie(cookie);

            //return cookie.getName();
            //得到cookie後，重新導回/myName;
            return "redirect:/myName";
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return "error";
        }
    }

}
