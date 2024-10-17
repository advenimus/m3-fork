// https://github.com/livrasand/Reviw/wiki/Anexo-2:-N%C3%BAmero-de-%C3%ADndice-de-idioma-en-la-tabla-MepsLanguage
const mepslangs: Record<number, string> = {
  0: 'E',
  1: 'S',
  2: 'X',
  3: 'F',
  4: 'I',
  5: 'T',
  6: 'O',
  7: 'J',
  8: 'AU',
  9: 'AC',
  10: 'AF',
  11: 'AL',
  12: 'AM',
  13: 'AI',
  14: 'A',
  15: 'R',
  16: 'AE',
  17: 'AS',
  18: 'IE',
  19: 'AR',
  20: 'BM',
  21: 'AO',
  22: 'BH',
  23: 'BS',
  24: 'BA',
  25: 'AK',
  26: 'OI',
  27: 'BT',
  28: 'EN',
  29: 'BE',
  30: 'IK',
  31: 'BI',
  32: 'LM',
  33: 'BO',
  34: 'BR',
  35: 'BK',
  36: 'BL',
  37: 'BU',
  38: 'CB',
  39: 'CV',
  40: 'CC',
  41: 'CM',
  42: 'CN',
  43: 'CH',
  44: 'CHP',
  45: 'CG',
  46: 'CK',
  47: 'CW',
  48: 'NM',
  49: 'CT',
  50: 'CY',
  51: 'CR',
  52: 'C',
  53: 'B',
  54: 'D',
  55: 'DK',
  56: 'MD',
  57: 'DI',
  58: 'DA',
  59: 'ED',
  60: 'EF',
  61: 'ES',
  62: 'ST',
  63: 'EW',
  64: 'FA',
  65: 'FR',
  66: 'FN',
  67: 'FI',
  68: 'GA',
  69: 'GB',
  70: 'GY',
  71: 'GO',
  72: 'G',
  73: 'GL',
  74: 'GI',
  75: 'GU',
  76: 'EG',
  77: 'ND',
  78: 'HK',
  79: 'HA',
  80: 'HW',
  81: 'HY',
  82: 'Q',
  83: 'HR',
  84: 'HV',
  85: 'HI',
  86: 'MO',
  87: 'HO',
  88: 'HU',
  89: 'H',
  90: 'IA',
  91: 'IG',
  92: 'IC',
  93: 'ID',
  94: 'IF',
  95: 'AA',
  96: 'IB',
  97: 'IJ',
  98: 'IL',
  99: 'IN',
  100: 'IU',
  101: 'GC',
  102: 'IR',
  103: 'IS',
  104: 'IT',
  105: 'IV',
  106: 'JA',
  107: 'AH',
  108: 'KL',
  109: 'KJ',
  110: 'KA',
  111: 'KR',
  112: 'KE',
  113: 'KC',
  114: 'KS',
  115: 'KB',
  116: 'KD',
  117: 'KG',
  118: 'KQ',
  119: 'KU',
  120: 'KK',
  121: 'YW',
  122: 'IY',
  123: 'RU',
  124: 'KI',
  125: 'II',
  126: 'KV',
  127: 'KN',
  128: 'KT',
  129: 'KO',
  130: 'OS',
  131: 'KP',
  132: 'UN',
  133: 'KH',
  134: 'WG',
  135: 'KY',
  136: 'KW',
  137: 'LN',
  138: 'LA',
  139: 'LF',
  140: 'LI',
  141: 'L',
  142: 'OM',
  143: 'LC',
  144: 'LU',
  145: 'LG',
  146: 'LY',
  147: 'LK',
  148: 'LB',
  149: 'LH',
  150: 'LW',
  151: 'LO',
  152: 'LS',
  153: 'LV',
  154: 'MS',
  155: 'MC',
  156: 'MU',
  157: 'MG',
  158: 'ML',
  159: 'MY',
  160: 'MT',
  161: 'MI',
  162: 'MN',
  163: 'MA',
  164: 'OL',
  165: 'MW',
  166: 'MR',
  167: 'RE',
  168: 'MQ',
  169: 'MH',
  170: 'MB',
  171: 'CE',
  172: 'ME',
  173: 'UU',
  174: 'MK',
  175: 'MM',
  176: 'NA',
  177: 'NR',
  178: 'OD',
  179: 'NE',
  180: 'NP',
  181: 'MP',
  182: 'NI',
  183: 'NN',
  184: 'N',
  185: 'NU',
  186: 'YM',
  187: 'NY',
  188: 'NZ',
  189: 'OG',
  190: 'OK',
  191: 'OT',
  192: 'PU',
  193: 'PM',
  194: 'PN',
  195: 'PA',
  196: 'ZN',
  197: 'PR',
  198: 'P',
  199: 'PP',
  200: 'PJ',
  201: 'RA',
  202: 'M',
  203: 'OR',
  204: 'RN',
  205: 'RO',
  206: 'RR',
  207: 'U',
  208: 'RT',
  209: 'SA',
  210: 'ZA',
  211: 'SM',
  212: 'SG',
  213: 'SE',
  214: 'SB',
  215: 'ER',
  216: 'SU',
  217: 'SC',
  218: 'CA',
  219: 'SK',
  220: 'SN',
  221: 'V',
  222: 'SV',
  223: 'SP',
  224: 'SO',
  225: 'SR',
  226: 'UK',
  227: 'SD',
  228: 'SW',
  229: 'ZS',
  230: 'Z',
  231: 'TG',
  232: 'TH',
  233: 'AT',
  234: 'TL',
  235: 'TA',
  236: 'TU',
  237: 'SI',
  238: 'TT',
  239: 'CI',
  240: 'TI',
  241: 'TV',
  242: 'TR',
  243: 'OE',
  244: 'TO',
  245: 'TE',
  246: 'SH',
  247: 'TS',
  248: 'TN',
  249: 'TB',
  250: 'TK',
  251: 'VL',
  252: 'TW',
  253: 'K',
  254: 'UB',
  255: 'UD',
  256: 'UR',
  257: 'VE',
  258: 'VT',
  259: 'WA',
  260: 'W',
  261: 'WO',
  262: 'XO',
  263: 'YA',
  264: 'YP',
  265: 'YG',
  266: 'Y',
  267: 'YR',
  268: 'ZU',
  269: 'GK',
  270: 'AY',
  271: 'GE',
  272: 'LD',
  273: 'OA',
  274: 'PK',
  275: 'KIM',
  276: 'BQ',
  277: 'CQ',
  278: 'AN',
  279: 'CHS',
  280: 'GJ',
  281: 'GR',
  282: 'KAM',
  283: 'IP',
  284: 'AB',
  285: 'LT',
  286: 'MZ',
  287: 'MQN',
  288: 'DU',
  289: 'NG',
  290: 'OV',
  291: 'PL',
  292: 'QU',
  293: 'QC',
  294: 'PS',
  295: 'DM',
  296: 'AW',
  297: 'HM',
  298: 'RD',
  299: 'QI',
  300: 'RHG',
  301: 'RH',
  302: 'RHS',
  303: 'SHA',
  304: 'AJ',
  305: 'KAB',
  306: 'KEK',
  307: 'TAT',
  308: 'BY',
  309: 'GBA',
  310: 'NV',
  311: 'OB',
  312: 'ON',
  313: 'OU',
  314: 'RM',
  315: 'RV',
  316: 'WL',
  317: 'MIS',
  318: 'AZ',
  319: 'UG',
  320: 'KZ',
  321: 'AP',
  322: 'DT',
  323: 'EA',
  324: 'NC',
  325: 'KX',
  326: 'LP',
  327: 'AD',
  328: 'KHK',
  329: 'YK',
  330: 'KHA',
  331: 'MAR',
  332: 'CU',
  333: 'KAD',
  334: 'JC',
  335: 'KAN',
  336: 'LAH',
  337: 'KND',
  338: 'ABK',
  339: 'JL',
  340: 'LIS',
  341: 'ZR',
  342: 'BB',
  343: 'OSS',
  344: 'FU',
  345: 'PT',
  346: 'LR',
  347: 'KBY',
  348: 'KBR',
  349: 'BAL',
  350: 'RDA',
  351: 'KUK',
  352: 'LE',
  353: 'MAC',
  354: 'UE',
  355: 'SEN',
  356: 'TJ',
  357: 'UZ',
  358: 'DR',
  359: 'NW',
  360: 'ET',
  361: 'CO',
  362: 'VI',
  363: 'ZO',
  364: 'PJN',
  365: 'MOR',
  366: 'NB',
  367: 'DG',
  368: 'FF',
  369: 'KIN',
  370: 'KIT',
  371: 'LIN',
  372: 'LOM',
  373: 'ORR',
  374: 'KIP',
  375: 'BEL',
  376: 'ALT',
  377: 'BLN',
  378: 'TM',
  379: 'DO',
  380: 'FO',
  381: 'FD',
  382: 'GN',
  383: 'IBI',
  384: 'IH',
  385: 'TCR',
  386: 'CRM',
  387: 'SL',
  388: 'SBO',
  389: 'RI',
  390: 'MSH',
  391: 'NGK',
  392: 'KSN',
  393: 'REA',
  394: 'GCS',
  395: 'TOR',
  396: 'KM',
  397: 'LZ',
  398: 'HE',
  399: 'RCR',
  400: 'EZ',
  401: 'MAZ',
  402: 'MOK',
  403: 'TZE',
  404: 'TZO',
  405: 'UM',
  406: 'ING',
  407: 'MAA',
  408: 'TRN',
  409: 'NK',
  410: 'GZ',
  411: 'GMA',
  412: 'WY',
  413: 'FT',
  414: 'BAK',
  415: 'RDC',
  416: 'FS',
  417: 'MAY',
  418: 'AV',
  419: 'LAD',
  420: 'ASL',
  421: 'QUB',
  422: 'TOB',
  423: 'SKL',
  424: 'TNK',
  425: 'TOT',
  426: 'VZ',
  427: 'MTU',
  428: 'PAA',
  429: 'LHK',
  430: 'HUV',
  431: 'MX',
  432: 'TJO',
  433: 'AJR',
  434: 'TSC',
  435: 'ZPI',
  436: 'ZPX',
  437: 'ZPV',
  438: 'ELI',
  439: 'BTS',
  440: 'TTP',
  441: 'MRB',
  442: 'CHL',
  443: 'NHT',
  444: 'POK',
  445: 'TRH',
  446: 'TRS',
  447: 'MBK',
  448: 'IGE',
  449: 'QUA',
  450: 'LSA',
  451: 'AUS',
  452: 'LSB',
  453: 'BSL',
  454: 'SCH',
  455: 'LSC',
  456: 'CSE',
  457: 'DSL',
  458: 'NGT',
  459: 'SEC',
  460: 'STD',
  461: 'FID',
  462: 'LSF',
  463: 'DGS',
  464: 'HDF',
  465: 'ISL',
  466: 'JSL',
  467: 'KSL',
  468: 'LSM',
  469: 'NDF',
  470: 'LSP',
  471: 'SPE',
  472: 'PDF',
  473: 'LSQ',
  474: 'RSL',
  475: 'LSE',
  476: 'LSV',
  477: 'PH',
  478: 'MWI',
  479: 'LX',
  480: 'MDI',
  481: 'LSN',
  482: 'RMS',
  483: 'RMO',
  484: 'NHG',
  485: 'TLN',
  486: 'NDA',
  487: 'DGR',
  488: 'TZU',
  489: 'BLF',
  490: 'GSL',
  491: 'NOR',
  492: 'NOS',
  493: 'LJ',
  494: 'QUN',
  495: 'OC',
  496: 'QSL',
  497: 'NAG',
  498: 'RWG',
  499: 'AKA',
  500: 'FLM',
  501: 'KYH',
  502: 'MON',
  503: 'SNG',
  504: 'WAM',
  505: 'XV',
  506: 'TSL',
  507: 'VSL',
  508: 'BSN',
  509: 'ZSL',
  510: 'LSL',
  511: 'AGC',
  512: 'AMZ',
  513: 'CCM',
  514: 'CCP',
  515: 'CCT',
  516: 'CHJ',
  517: 'CHO',
  518: 'CHT',
  519: 'CLT',
  520: 'CLX',
  521: 'CMC',
  522: 'CNT',
  523: 'COR',
  524: 'GRJ',
  525: 'HCH',
  526: 'HST',
  527: 'IXC',
  528: 'IXL',
  529: 'JCL',
  530: 'KAI',
  531: 'KKP',
  532: 'KLW',
  533: 'LCN',
  534: 'MTL',
  535: 'MTZ',
  536: 'MXG',
  537: 'MXO',
  538: 'MYO',
  539: 'MZH',
  540: 'NHH',
  541: 'NHV',
  542: 'OCL',
  543: 'OTM',
  544: 'PAI',
  545: 'PAM',
  546: 'PIM',
  547: 'PPG',
  548: 'NGM',
  549: 'PPU',
  550: 'SER',
  551: 'TEC',
  552: 'TP',
  553: 'TPN',
  554: 'TQ',
  555: 'YQ',
  556: 'ZQ',
  557: 'PSL',
  558: 'BEA',
  559: 'LL',
  560: 'LVA',
  561: 'MSR',
  562: 'OKP',
  563: 'KUR',
  564: 'SHU',
  565: 'AGR',
  566: 'SCR',
  567: 'GMP',
  568: 'KLK',
  569: 'KSI',
  570: 'ZPD',
  571: 'ZPG',
  572: 'ZPL',
  573: 'ZPM',
  574: 'ZPT',
  575: 'ZPC',
  576: 'DRG',
  577: 'ISG',
  578: 'KMK',
  579: 'LAK',
  580: 'LGP',
  581: 'LUC',
  582: 'TBN',
  583: 'TWK',
  584: 'TWS',
  585: 'UZR',
  586: 'MOU',
  587: 'NNG',
  588: 'SSL',
  589: 'LTS',
  590: 'CMG',
  591: 'SNK',
  592: 'SAS',
  593: 'UGA',
  594: 'GRF',
  595: 'LWX',
  596: 'MYG',
  597: 'GZR',
  598: 'WC',
  599: 'JU',
  600: 'SRM',
  601: 'GIB',
  602: 'INI',
  603: 'SSU',
  604: 'NZS',
  605: 'BVL',
  606: 'BRI',
  607: 'CRB',
  608: 'NBL',
  609: 'NHC',
  610: 'SWI',
  611: 'CTC',
  612: 'CTR',
  613: 'OCS',
  614: 'KUA',
  615: 'BLS',
  616: 'SBS',
  617: 'WCS',
  618: 'CYS',
  619: 'CSL',
  620: 'NGL',
  621: 'PTJ',
  622: 'SGS',
  623: 'SBF',
  624: 'CEC',
  625: 'VGT',
  626: 'LSG',
  627: 'TTM',
  628: 'RPN',
  629: 'SZJ',
  630: 'MXC',
  631: 'MXN',
  632: 'MXT',
  633: 'SIL',
  634: 'MSL',
  635: 'ALQ',
  636: 'JWK',
  637: 'KMP',
  638: 'MLP',
  639: 'ORK',
  640: 'YC',
  641: 'YCS',
  642: 'FSL',
  643: 'NGB',
  644: 'CBS',
  645: 'OGS',
  646: 'CIN',
  647: 'CPC',
  648: 'EMB',
  649: 'MPD',
  650: 'WCH',
  651: 'SSP',
  652: 'SHO',
  653: 'KMY',
  654: 'KUM',
  655: 'IKN',
  656: 'KNR',
  657: 'UZA',
  658: 'NAN',
  659: 'WLN',
  660: 'ACH',
  661: 'AZA',
  662: 'ADH',
  663: 'FTL',
  664: 'MKS',
  665: 'MMB',
  666: 'ODW',
  667: 'SLM',
  668: 'NBZ',
  669: 'PIC',
  670: 'XRC',
  671: 'AHK',
  672: 'HZJ',
  673: 'JCR',
  674: 'KRI',
  675: 'MHK',
  676: 'MLN',
  677: 'SRI',
  678: 'TMN',
  679: 'CHN',
  680: 'MWL',
  681: 'TND',
  682: 'RNY',
  683: 'PLG',
  684: 'QIS',
  685: 'ABN',
  686: 'ARO',
  687: 'AKN',
  688: 'AYW',
  689: 'BAU',
  690: 'GTN',
  691: 'IBL',
  692: 'KNY',
  693: 'KWA',
  694: 'MLG',
  695: 'DAR',
  696: 'NTU',
  697: 'ABB',
  698: 'ATI',
  699: 'GUR',
  700: 'MBD',
  701: 'RMB',
  702: 'TPR',
  703: 'YCB',
  704: 'NSL',
  705: 'LMG',
  706: 'BMU',
  707: 'BNK',
  708: 'KEM',
  709: 'NTE',
  710: 'NYU',
  711: 'SOL',
  712: 'WMO',
  713: 'VRU',
  714: 'HSL',
  715: 'MKO',
  716: 'MMA',
  717: 'MME',
  718: 'MMS',
  719: 'MAP',
  720: 'NEN',
  721: 'SYL',
  722: 'TKC',
  723: 'BDY',
  724: 'DGA',
  725: 'MJK',
  726: 'QIC',
  727: 'QII',
  728: 'QIP',
  729: 'QIT',
  730: 'HLA',
  731: 'NKM',
  732: 'SFC',
  733: 'TCN',
  734: 'WMA',
  735: 'SHC',
  736: 'ZAS',
  737: 'CNO',
  738: 'RGS',
  739: 'SLS',
  740: 'DWW',
  741: 'BIM',
  742: 'BUS',
  743: 'RMG',
  744: 'YON',
  745: 'CPI',
  746: 'MWM',
  747: 'MKD',
  748: 'LSU',
  749: 'CAB',
  750: 'IMN',
  751: 'KAZ',
  752: 'ALU',
  753: 'BMB',
  754: 'BDZ',
  755: 'BSG',
  756: 'DNS',
  757: 'KYK',
  758: 'LND',
  759: 'MBL',
  760: 'SGA',
  761: 'SGM',
  762: 'YAK',
  763: 'YNS',
  764: 'YMB',
  765: 'SBR',
  766: 'CGW',
  767: 'KLZ',
  768: 'GLC',
  769: 'VLC',
  770: 'ALS',
  771: 'INS',
  772: 'MYW',
  773: 'GHB',
  774: 'PMN',
  775: 'PRA',
  776: 'PME',
  777: 'WRO',
  778: 'YKP',
  779: 'RDU',
  780: 'KGL',
  781: 'LGA',
  782: 'MNN',
  783: 'NGN',
  784: 'TEK',
  785: 'TPO',
  786: 'RMN',
  787: 'MAI',
  788: 'MAJ',
  789: 'MAN',
  790: 'MAS',
  791: 'CNL',
  792: 'CNQ',
  793: 'CNU',
  794: 'CNV',
  795: 'AMG',
  796: 'GRZ',
  797: 'TER',
  798: 'MCS',
  799: 'SUS',
  800: 'MKE',
  801: 'PMR',
  802: 'QUH',
  803: 'PLR',
  804: 'SAR',
  805: 'JAR',
  806: 'RDE',
  807: 'SLV',
  808: 'KPM',
  809: 'NKR',
  810: 'LAS',
  811: 'LLB',
  812: 'RMP',
  813: 'BTD',
  814: 'SGR',
  815: 'GRC',
  816: 'KHN',
  817: 'BZK',
  818: 'DKA',
  819: 'MGR',
  820: 'XPA',
  821: 'ALN',
  822: 'ABU',
  823: 'ADZ',
  824: 'AMO',
  825: 'ATN',
  826: 'HSK',
  827: 'TAL',
  828: 'QUL',
  829: 'GHS',
  830: 'RMA',
  831: 'LLO',
  832: 'GAR',
  833: 'GAA',
  834: 'LTG',
  835: 'TCH',
  836: 'TMZ',
  837: 'MXA',
  838: 'MXM',
  839: 'MXX',
  840: 'MXP',
  841: 'PQM',
  842: 'SVN',
  843: 'MGL',
  844: 'IPN',
  845: 'SIE',
  846: 'LKT',
  847: 'CBL',
  848: 'TYW',
  849: 'TEB',
  850: 'AHN',
  851: 'AYN',
  852: 'DGB',
  853: 'GNJ',
  854: 'KSM',
  855: 'KKB',
  856: 'KUS',
  857: 'SHW',
  858: 'TMR',
  859: 'LSS',
  860: 'OTS',
  861: 'TLY',
  862: 'RMC',
  863: 'SST',
  864: 'ABE',
  865: 'APM',
  866: 'EFN',
  867: 'EFS',
  868: 'HNO',
  869: 'LNK',
  870: 'PMA',
  871: 'BTA',
  872: 'DMR',
  873: 'ATY',
  874: 'BNN',
  875: 'PWN',
  876: 'PYM',
  877: 'RKI',
  878: 'TRK',
  879: 'YMI',
  880: 'BTK',
  881: 'MDR',
  882: 'CHW',
  883: 'TEW',
  884: 'ARH',
  885: 'MCG',
  886: 'WNM',
  887: 'PAZ',
  888: 'CGA',
  889: 'AJA',
  890: 'CSC',
  891: 'KMN',
  892: 'NKY',
  893: 'QIB',
  894: 'SLN',
  895: 'BSH',
  896: 'OTE',
  897: 'IAA',
  898: 'KWN',
  899: 'YNG',
  900: 'CMU',
  901: 'EZM',
  902: 'AZG',
  903: 'CRS',
  904: 'LSI',
  905: 'RML',
  906: 'HSV',
  907: 'SGH',
  908: 'NKN',
  909: 'MNO',
  910: 'KRK',
  911: 'RMR',
  912: 'UBM',
  913: 'SAL',
  914: 'AMA',
  915: 'KRY',
  916: 'SPL',
  917: 'DDL',
  918: 'CKE',
  919: 'GCR',
  920: 'GNC',
  921: 'YU',
  922: 'QNJ',
  923: 'ILA',
  924: 'WNZ',
  925: 'NGS',
  926: 'URP',
  927: 'CHH',
  928: 'HPI',
  929: 'MBA',
  930: 'NGP',
  931: 'OBL',
  932: 'SYT',
  933: 'SDQ',
  934: 'TSO',
  935: 'KSH',
  936: 'SSN',
  937: 'TYC',
  938: 'MKL',
  939: 'KTI',
  940: 'MHM',
  941: 'MHS',
  942: 'MRJ',
  943: 'SIR',
  944: 'SIS',
  945: 'SIG',
  946: 'YN',
  947: 'RMT',
  948: 'FJS',
  949: 'PLK',
  950: 'MLS',
  951: 'KPN',
  952: 'KHM',
  953: 'AJG',
  954: 'AWA',
  955: 'CGI',
  956: 'CRE',
  957: 'EMC',
  958: 'EMP',
  959: 'FBN',
  960: 'GBM',
  961: 'GG',
  962: 'GNA',
  963: 'HH',
  964: 'INB',
  965: 'KBV',
  966: 'MNS',
  967: 'NDL',
  968: 'NFR',
  969: 'PCM',
  970: 'SYB',
  971: 'TUO',
  972: 'CHF',
  973: 'CHD',
  974: 'HMN',
  975: 'KMB',
  976: 'KLE',
  977: 'KUY',
  978: 'LGO',
  979: 'MHL',
  980: 'MGB',
  981: 'PHN',
  982: 'SRG',
  983: 'XSW',
  984: 'TBW',
  985: 'TJU',
  986: 'TLR',
  987: 'WJW',
  988: 'HWU',
  989: 'KNM',
  990: 'USL',
  991: 'AEY',
  992: 'TKL',
  993: 'KRB',
  994: 'TTR',
  995: 'TTC',
  996: 'CGM',
  997: 'FGN',
  998: 'CMT',
  999: 'MTC',
  1000: 'EBR',
  1001: 'RME',
  1002: 'KRM',
  1003: 'GBN',
  1004: 'TIS',
  1005: 'LCE',
  1006: 'SCN',
  1007: 'HRV',
  1008: 'CHK',
  1009: 'CHG',
  1010: 'SVL',
  1011: 'CGS',
  1012: 'AYI',
  1013: 'GHM',
  1014: 'FFE',
  1015: 'BBA',
  1016: 'SSA',
  1017: 'NGE',
  1018: 'SIH',
  1019: 'SIK',
  1020: 'SHD',
  1021: 'SHR',
  1022: 'TBT',
  1023: 'NMB',
  1024: 'RMK',
  1025: 'RMV',
  1026: 'BDG',
  1027: 'TSM',
  1028: 'IGN',
  1029: 'GRY',
  1030: 'CHQ',
  1031: 'BRW',
  1032: 'RMX',
  1033: 'TTB',
  1034: 'PMO',
  1035: 'KEI',
  1036: 'TII',
  1037: 'NNS',
  1038: 'SHS',
  1039: 'QCC',
  1040: 'QCS',
  1041: 'NML',
  1042: 'KWS',
  1043: 'ESL',
  1044: 'NDD',
  1045: 'TKN',
  1046: 'TWL',
  1047: 'URI',
  1048: 'WDU',
  1049: 'KDA',
  1050: 'KNG',
  1051: 'MIA',
  1052: 'MNG',
  1053: 'NKI',
  1054: 'SUU',
  1055: 'BKN',
  1056: 'BWD',
  1057: 'ALK',
  1058: 'MNC',
  1059: 'JVN',
  1060: 'MNK',
  1061: 'MSK',
  1062: 'ZZN',
  1063: 'TLS',
  1064: 'ARS',
  1065: 'RMU',
  1066: 'HKI',
  1067: 'MPG',
  1068: 'ITW',
  1069: 'WAN',
  1070: 'ABR',
  1071: 'CHC',
  1072: 'CNS',
  1073: 'LMB',
  1074: 'BFI',
  1075: 'BTN',
  1076: 'ETN',
  1077: 'EWN',
  1078: 'MKA',
  1079: 'BBE',
  1080: 'MYN',
  1081: 'NJB',
  1082: 'PUN',
  1083: 'TWA',
  1084: 'JML',
  1085: 'TRF',
  1086: 'PPS',
  1087: 'CHE',
  1088: 'NNT',
  1089: 'SHH',
  1090: 'HMS',
  1091: 'APH',
  1092: 'BFS',
  1093: 'CSN',
  1094: 'DYT',
  1095: 'BNJ',
  1096: 'BKK',
  1097: 'TNN',
  1098: 'AWN',
  1099: 'HMA',
  1100: 'LBM',
  1101: 'BBL',
  1102: 'MNT',
  1103: 'UTE',
  1104: 'JJU',
  1105: 'RMH',
  1106: 'MGK',
  1107: 'NGO',
  1108: 'YBS',
  1109: 'GNU',
  1110: 'IUR',
  1111: 'MTN',
  1112: 'FCA',
  1113: 'MBO',
  1114: 'NNF',
  1115: 'MRH',
  1116: 'KRA',
  1117: 'GLE',
  1118: 'NYG',
  1119: 'MTA',
  1120: 'TZL',
  1121: 'OMB',
  1122: 'KGG',
  1123: 'NGU',
  1124: 'STM',
  1125: 'WPH',
  1126: 'MNM',
  1127: 'NVC',
  1128: 'MDH',
  1129: 'KBE',
  1130: 'KOC',
  1131: 'CRW',
  1132: 'PGW',
  1133: 'RMF',
  1134: 'BRM',
  1135: 'BUR',
  1136: 'EBA',
  1137: 'EGG',
  1138: 'EJH',
  1139: 'FLN',
  1140: 'IKW',
  1141: 'KMW',
  1142: 'KNC',
  1143: 'KKR',
  1144: 'MBM',
  1145: 'YLA',
  1146: 'OBG',
  1147: 'TRW',
  1148: 'LMS',
  1149: 'ABJ',
  1150: 'AUR',
  1151: 'ADK',
  1152: 'KLB',
  1153: 'LBI',
  1154: 'RWS',
  1155: 'SMS',
  1156: 'CGG',
  1157: 'HVU',
  1158: 'DKS',
  1159: 'MNI',
  1160: 'DND',
  1161: 'SND',
  1162: 'CTI',
  1163: 'ARQ',
  1164: 'AJD',
  1165: 'ASR',
  1166: 'GNB',
  1167: 'CST',
  1168: 'TWD',
  1169: 'MTS',
  1170: 'LTN',
  1171: 'CQC',
  1172: 'CQE',
  1173: 'CQS',
  1174: 'DGI',
  1175: 'CRT',
  1176: 'SWS',
  1177: 'WSL',
  1178: 'BLB',
  1179: 'OSC',
  1180: 'OSK',
  1181: 'MWN',
  1182: 'MKM',
  1183: 'PHM',
  1184: 'TKW',
  1185: 'KKL',
  1186: 'TWR',
  1187: 'RMM',
  1188: 'MXE',
  1189: 'BMN',
  1190: 'DTM',
  1191: 'WMM',
  1192: 'CMS',
  1193: 'KRG',
  1194: 'CBE',
  1195: 'GBR',
  1196: 'TNC',
  1197: 'MLY',
  1198: 'HTM',
  1199: 'ARR',
  1200: 'BGG',
  1201: 'BLL',
  1202: 'LNG',
  1203: 'DKE',
  1204: 'FTK',
  1205: 'GLA',
  1206: 'GLL',
  1207: 'RNB',
  1208: 'GHN',
  1209: 'KUH',
  1210: 'WLA',
  1211: 'LAU',
  1212: 'ONJ',
  1213: 'NLG',
  1214: 'TKP',
  1215: 'VRS',
  1216: 'MIR',
  1217: 'CTW',
  1218: 'RNN',
  1219: 'LWC',
  1220: 'KNO',
  1221: 'LGD',
  1222: 'RNC',
  1223: 'CMK',
  1224: 'PTN',
  1225: 'NMT',
  1226: 'HWI',
  1227: 'WMP',
  1228: 'QUM',
  1229: 'QUC',
  1230: 'QUS',
  1231: 'DTS',
  1232: 'MKY',
  1233: 'PPL',
  1234: 'RMI',
  1235: 'ZPA',
  1236: 'ZPS',
  1237: 'BNW',
  1238: 'NSM',
  1239: 'PAO',
  1240: 'TEM',
  1241: 'RVC',
  1242: 'NHW',
  1243: 'TKM',
  1244: 'RVK',
  1245: 'CPL',
  1246: 'HWP',
  1247: 'KHW',
  1248: 'KPO',
  1249: 'MSS',
  1250: 'BHJ',
  1251: 'MXI',
  1252: 'MXH',
  1253: 'QIX',
  1258: 'STN',
  1268: 'BRS',
  1286: 'LBS',
};

export default mepslangs;