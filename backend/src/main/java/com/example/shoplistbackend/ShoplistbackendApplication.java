package com.example.shoplistbackend;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.model.User;
import com.example.shoplistbackend.repository.MongoUserRepository;
import com.example.shoplistbackend.repository.Shoppinglist;
import com.example.shoplistbackend.service.MongoUserDetailsService;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = Shoppinglist.class)
public class ShoplistbackendApplication implements CommandLineRunner {

    private static final Log LOG = LogFactory.getLog(ShoplistbackendApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ShoplistbackendApplication.class, args);
    }

    @Autowired
    Shoppinglist items;

    @Autowired
    MongoUserRepository repository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public void run(String... args) throws Exception {
        repository.deleteAll();
        items.deleteAll();

        String encodedPassword = encoder.encode("test123");
        final User user = User.newUser("test", encodedPassword,
                List.of(new SimpleGrantedAuthority(MongoUserDetailsService.AUTHORITY_API_READWRITE)));
        try {
            repository.insert(user);
        } catch (DuplicateKeyException e) {
            LOG.info("User '" + user.getUsername() + "' already exists.");
        }

        final Shoppinglistitem product = Shoppinglistitem.builder().name("Brot").build();
        items.save(product);

        repository.findAll().stream().forEach(System.out::println);
        items.findAll().stream().forEach(System.out::println);
    }
}

