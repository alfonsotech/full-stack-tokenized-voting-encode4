import { useReadContract } from "wagmi";
import MyTokenABI from '../../abis/MyToken.json';

function TokenBalance(params: { address: `0x${string}` }) {
  const { data, isError, isLoading } = useReadContract({
    address: "0xc89e7284cf41ecfd96afa858019617f1388c6e30",
    abi: MyTokenABI.abi,
    functionName: "balanceOf",
    args: [params.address],
  });

  const balance = typeof data === "number" ? data : 0;

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return <div>Balance: {balance}</div>;
}

export default TokenBalance;