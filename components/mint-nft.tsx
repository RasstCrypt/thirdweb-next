"use client"

import { useContract, Web3Button } from "@thirdweb-dev/react"
import { Button } from "@/components/ui/button"

export default function MintNFT() {
  const contractAddress = "your-contract-address"
  const { contract } = useContract(contractAddress)

  return (
    <Web3Button
      contractAddress={contractAddress}
      action={(contract) => contract.erc721.claim(1)}
      onSuccess={() => alert("NFT Claimed!")}
      onError={(err) => alert("Error claiming NFT")}
    >
      {({ isLoading }) => (
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
          {isLoading ? "Minting..." : "MINT"}
        </Button>
      )}
    </Web3Button>
  )
}

