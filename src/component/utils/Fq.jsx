import Faq from "react-faq-component";

export default function Fq() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "Why is the payout in BUSD, not in $FLOH?",
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your investment will pay for itself over time.`,
    },
    {
      title: "What is slippage for?",
      content:
        "To set the tolerance on the maximum percentage of price movement you can live with. IT IS NOT A TAX.",
    },
    {
      title: "Why 8% tax and when is it applied?",
      content: `It is applied to EVERY TRANSACTION, this includes: Buys, Sells and Transfers. 4% gets redistributed to all holders, 3% to marketing, and 1% to the liquidity pool. `,
    },
    {
      title: "Why am I not receiving rewards?",
      content: (
        <p>
          Rewards are directly related to trading volume and your bag size. The
          higher the volume, the more rewards you earn!
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "Black",
  titleTextColor: "White",
  rowTitleColor: "White",
  rowContentColor: "orange",
  arrowColor: "orange",
};

const config = {
  animate: true,
  arrowIcon: "",
  tabFocus: true,
};
