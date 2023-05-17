import {
  MARKET_SLUGS, MarketSlug, TRANSACTIONS_SLUGS, TransactionsSlug, PERIODS, Period,
} from '@/types';

export function isMarketSlug(indicator: string): indicator is MarketSlug {
  return MARKET_SLUGS.includes(indicator as MarketSlug);
}

export function isTransactionsSlug(indicator: string): indicator is TransactionsSlug {
  return TRANSACTIONS_SLUGS.includes(indicator as TransactionsSlug);
}

export function isPeriod(period: string): period is Period {
  return PERIODS.includes(period as Period);
}
