import { useReadContract } from "wagmi";

function TokenName() {
  const { data, isError, isLoading } = useReadContract({
    address: "0x37dBD10E7994AAcF6132cac7d33bcA899bd2C660",
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <div>Token name: {name}</div>;
}

export default TokenName;