package com.wealthengine.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Portfolio.
 */
@Entity
@Table(name = "portfolio")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)

public class Portfolio implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "shares")
    private String shares;

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public Portfolio symbol(String symbol) {
        this.symbol = symbol;
        return this;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getShares() {
        return shares;
    }

    public Portfolio shares(String shares) {
        this.shares = shares;
        return this;
    }

    public void setShares(String shares) {
        this.shares = shares;
    }


    public BigDecimal getPrice() {
        return price;
    }

    public Portfolio price(BigDecimal price) {
        this.price = price;
        return this;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Portfolio portfolio = (Portfolio) o;
        if (portfolio.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), portfolio.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Portfolio{" +
            "id=" + getId() +
            ", symbol='" + getSymbol() + "'" +
            ", shares='" + getShares() + "'" +
            ", price=" + getPrice() +
            "}";
    }
}
