package com.demo.springboot.app.controllers;

import java.util.ArrayList;
import java.util.List;

import com.demo.springboot.app.models.Quote;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
public class QuotesController {
	private int index = -1;
	public static List<Quote> quotes = new ArrayList<>();
	static {
		quotes.add(new Quote("It’s hardware that makes a machine fast.  It’s software that makes a fast machine slow.","Craig Bruce"));
		quotes.add(new Quote("The more you know, the more you realize you know nothing.","Socrates"));
		quotes.add(new Quote("The best way to predict the future is to implement it.","David Heinemeier Hansson"));
		quotes.add(new Quote("If you think your users are idiots, only idiots will use it.","Linus Torvalds"));
		quotes.add(new Quote("A program is never less than 90% complete, and never more than 95% complete.","Terry Baker"));
		quotes.add(new Quote("Today, most software exists, not to solve a problem, but to interface with other software.","IO Angell"));
		quotes.add(new Quote("Programs must be written for people to read, and only incidentally for machines to execute.","Abelson and Sussman"));
		quotes.add(new Quote("We have to stop optimizing for programmers and start optimizing for users.","Jeff Atwood"));
		quotes.add(new Quote("Before software should be reusable, it should be usable.","Ralph Johnson"));
		quotes.add(new Quote("If you automate a mess, you get an automated mess.","Rod Michael"));
		quotes.add(new Quote("UNIX is simple.  It just takes a genius to understand its simplicity.","Dennis Ritchie"));
	}
	
	@CrossOrigin
	@GetMapping("/quote")
	public Quote getQuote() {	
		index = (index == quotes.size()-1) ? 0 : index+1;
		log.info("Quote Index: {}", index);
		return quotes.get(index);
	}
}
