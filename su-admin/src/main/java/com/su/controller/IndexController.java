package com.su.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: supengfei
 * @Date: 2019/1/7 17:16
 * @Description:
 */
@Controller
public class IndexController {

    @GetMapping ("/app")
    public String index() {
        return "index1";
    }
    @GetMapping("/")
    public String home() {
        return "home";
    }
    @GetMapping("/map")
    public String map() {
        return "map";
    }
}
