package com.wealthengine.repository;

import com.wealthengine.domain.Book;
import com.wealthengine.domain.Portfolio;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Book entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {

}
