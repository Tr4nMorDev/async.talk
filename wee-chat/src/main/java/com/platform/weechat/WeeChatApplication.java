package com.platform.weechat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@EnableRedisRepositories
@SpringBootApplication
public class WeeChatApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeeChatApplication.class, args);
    }

}
