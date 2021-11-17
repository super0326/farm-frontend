export const cronosPools = [
  {
    id: 'vvs-usdt-usdc',
    name: 'USDT-USDC',
    token: 'USDT-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x39cC0E14795A8e6e9D02A21091b81FE0d61D82f9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsUSDT-USDC',
    earnedTokenAddress: '0xB38D32336538559Ce6680952B0Be4917ed015c39',
    earnContractAddress: '0xB38D32336538559Ce6680952B0Be4917ed015c39',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['USDT', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770',
    addLiquidityUrl:
      'https://vvs.finance/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0x66e428c3f67a68878562e79A0234c1F83c208770',
  },
  {
    id: 'vvs-vvs',
    logo: 'single-assets/VVS.svg',
    name: 'VVS',
    token: 'VVS',
    tokenDescription: 'VVS',
    tokenAddress: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvs',
    earnedTokenAddress: '0xb29cCE04365400409d476e95410547275D1F86Cf',
    earnContractAddress: '0xb29cCE04365400409d476e95410547275D1F86Cf',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'VVS',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-vvs-usdc',
    name: 'VVS-USDC',
    token: 'VVS-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x814920D1b8007207db6cB5a2dD92bF0b082BDBa1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsVVS-USDC',
    earnedTokenAddress: '0x78757cdC2124A34aC5382602a95B4776D6111549',
    earnContractAddress: '0x78757cdC2124A34aC5382602a95B4776D6111549',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-vvs-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    addLiquidityUrl:
      'https://vvs.finance/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-vvs-cro',
    name: 'VVS-CRO',
    token: 'VVS-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xbf62c67eA509E86F07c8c69d0286C0636C50270b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsVVS-CRO',
    earnedTokenAddress: '0x2fbB1caF6271A14b13F3432f3aB2D6aF102560fA',
    earnContractAddress: '0x2fbB1caF6271A14b13F3432f3aB2D6aF102560fA',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-vvs-cro',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-cro-eth',
    name: 'CRO-ETH',
    token: 'CRO-ETH LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xA111C17f8B8303280d3EB01BBcd61000AA7F39F9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-ETH',
    earnedTokenAddress: '0xB5F0fF997BEc850b11792ed07b2B5AbDEa869B84',
    earnContractAddress: '0xB5F0fF997BEc850b11792ed07b2B5AbDEa869B84',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
  },
  {
    id: 'vvs-cro-btc',
    name: 'CRO-BTC',
    token: 'CRO-BTC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x8F09fFf247B8fDB80461E5Cf5E82dD1aE2EBd6d7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-BTC',
    earnedTokenAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    earnContractAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x062E66477Faf219F25D27dCED647BF57C3107d52',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x062E66477Faf219F25D27dCED647BF57C3107d52',
  },
];
