const questions = [
	{
		name: 'Generátory passcode slouží pro',
		answers: [
			{
				body: 'Urychlení generování sekvenčních čísel',
				right: false
			},
			{
				body: 'Bezpečné uložení dlouhodobých klíčů',
				right: true
			},
			{
				body: 'Realizaci challenge-response (výzva-odpověď) protokolu',
				right: true
			},
			{
				body: 'Personalizaci elektronických pasů',
				right: false
			}
		]
	},
	{
		name: 'Český elektronický pas druhé generace s autentizací čipu:',
		answers: [
			{
				body: 'Lze naklonovat snadno, pokud známe data z MRZ',
				right: false
			},
			{
				body: 'Nelze snadno naklonovat (vyžaduje získání soukromého klíče pasu, který nelze z pasu vyčíst) a proto klonovaní českého pasu zatím nebylo veřejně  předvedeno.',
				right: true
			},
			{
				body: 'Lze naklonovat jen pokud spolupracuje skutečný držitel pasu a zná svůj PIN',
				right: false
			}
		]
	},
	{
		name: 'Jaký typ pamětí je typicky používán u současných čipových karet?',
		answers: [
			{
				body: 'DRAM',
				right: false
			},
			{
				body: 'SRAM',
				right: true
			},
			{
				body: 'GRAM',
				right: false
			},
			{
				body: 'EEPROM',
				right: true
			}
		]
	},
	{
		name: 'Které z následujících dělení modelů řízení přístupu není používáno:',
		answers: [
			{
				body: 'řízené pravidly / náhodné',
				right: true
			},
			{
				body: 'seznam přístupových oprávnění (capabilities) / seznam přístupových práv (ACL)',
				right: false
			},
			{
				body: 'synchronní / asynchronní',
				right: true
			},
			{
				body: 'symetrické / asymetrické',
				right: true
			},
			{
				body: 'volitelné / povinné',
				right: false
			},
			{
				body: 'centralizované / decentralizované',
				right: false
			}
		]
	},
	{
		name: 'Komerční biometrická řešení oproti forenzním nabízí',
		answers: [
			{
				body: 'plně automatizované systémy.',
				right: true
			},
			{
				body: 'možnost opakovaného vytvoření nedostatečně kvalitních registračních vzorků.',
				right: true
			},
			{
				body: 'vyšší přesnost.',
				right: false
			},
			{
				body: 'uchování zpracovaných charakteristik včetně biometrických vzorků.',
				right: false
			}
		]
	},
	{
		name: 'Slabá bezkoliznost u hašovacích funkcí znamená',
		answers: [
			{
				body: 'Pro dané x nejsme schopni v rozumném čase najít y!=x tak, že h(x)=h(y)',
				right: true
			},
			{
				body: 'Pro dané x nejsme schopni v rozumném čase najít y!=x tak, že h(x)=y',
				right: false
			},
			{
				body: 'Pro dané x nejsme schopni v rozumném čase najít y!=x tak, že x=h(y)',
				right: false
			},
			{
				body: 'V rozumném čase nejsme schopni nalézt x, y (x=y) tak, že h(x)!=h(y)',
				right: false
			}
		]
	},
	{
		name: 'Z jakých šifrovacích algoritmů se obvykle tvoří hašovací funkce?',
		answers: [
			{
				body: 'Asymetrická šifra',
				right: false
			},
			{
				body: 'Hašovací funkci nelze vytvořit z žádného šifrovacího algoritmu',
				right: false
			},
			{
				body: 'Proudová symetrická šifra',
				right: false
			},
			{
				body: 'Bloková symetrická šifra',
				right: true
			}
		]
	},
	{
		name: 'Biometriky jsou',
		answers: [
			{
				body: 'automatizované metody identifikace nebo ověření identity.',
				right: true
			},
			{
				body: 'založeny na opakovatelně měřitelných fyziologických nebo behaviorálních vlastnostech člověka.',
				right: true
			},
			{
				body: 'založeny na neopakovatelně měřitelných fyziologických nebo behaviorálních vlastnostech člověka.',
				right: false
			},
			{
				body: 'i metody identifikace pomocí čipové karty obsahující vzorky člověka.',
				right: false
			}
		]
	},
	{
		name: 'V tiketu používaném v systému Kerberos se objevuje:',
		answers: [
			{
				body: 'Identifikátor alespoň jedné ze stran',
				right: true
			},
			{
				body: 'Soukromý klíč',
				right: false
			},
			{
				body: 'Náhodná výzva',
				right: false
			},
			{
				body: 'Časové razítko',
				right: true
			}
		]
	},
	{
		name: 'Řízení přístupu, při němž vlastník rozhoduje o přístupech ke svým souborům, se nazývá:',
		answers: [
			{
				body: 'Princip maximálních privilegií.',
				right: false
			},
			{
				body: 'Flexibilní řízení přístupu.',
				right: false
			},
			{
				body: 'Volitelné řízení přístupu.',
				right: true
			},
			{
				body: 'Povinné řízení přístupu.',
				right: false
			}
		]
	},
	{
		name: 'Útok na čipové karty pomocí časové analýzy využívá:',
		answers: [
			{
				body: 'Délka operace v závislosti na vykonané větvi kódu.',
				right: true
			},
			{
				body: 'Délka operace v závislosti na zpracovávaných datech.',
				right: true
			},
			{
				body: 'Závislost průběhu odběru proudu na prováděné instrukci.',
				right: false
			},
			{
				body: 'Závislost průběhu odběru proudu na zpracovávaných datech.',
				right: false
			}
		]
	},
	{
		name: 'Mezi vlastnosti (axiomy) modelu Bell-LaPadula patří',
		answers: [
			{
				body: 'procesy nesmějí zapisovat data do nižší úrovně',
				right: true
			},
			{
				body: 'procesy nesmějí číst data na vyšší úrovni',
				right: true
			},
			{
				body: 'procesy nesmějí číst data z nižší úrovně',
				right: false
			}
		]
	},
	{
		name: 'Německý elektronický pas druhé generace s autentizací čipu:',
		answers: [
			{
				body: 'Lze naklonovat snadno, pokud známe data z MRZ',
				right: false
			},
			{
				body: 'Nelze snadno naklonovat (vyžaduje získání soukromého klíče pasu, který nelze z pasu vyčíst).',
				right: true
			},
			{
				body: 'Lze naklonovat jen pokud spolupracuje skutečný držitel pasu a zná svůj PIN',
				right: false
			}
		]
	},
	{
		name: 'Soubor /etc/shadow obsahuje',
		answers: [
			{
				body: 'Informaci o délce hesla',
				right: false
			},
			{
				body: 'Datum a čas posledního úspěšného přihlášení do systému',
				right: false
			},
			{
				body: 'Počet neúspěšných pokusů o zadání hesla',
				right: false
			},
			{
				body: 'Haše hesel uživatelů',
				right: true
			},
			{
				body: 'Informaci o tom, že haše hesel jsou v souboru /etc/passwd',
				right: false
			}
		]
	},
	{
		name: 'Snímače otisků prstů jsou',
		answers: [
			{
				body: 'inkoustové (tryskové)',
				right: false
			},
			{
				body: 'kapacitní',
				right: true
			},
			{
				body: 'polyadické',
				right: false
			},
			{
				body: 'optické',
				right: true
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení jsou pravdivá:',
		answers: [
			{
				body: 'Autentizace pomocí IP adresy může být použita pouze v kombinaci s MAC adresou.',
				right: false
			},
			{
				body: 'Autentizace pomocí IP adresy je výrazně bezpečnější než autentizace pomocí MAC adresy.',
				right: false
			},
			{
				body: 'Autentizace pomocí IP adresy je výrazně méně bezpečná než autentizace pomocí MAC adresy.',
				right: false
			},
			{
				body: 'Autentizace pomocí IP adresy není spolehlivá, protože IP může být změněna.',
				right: true
			}
		]
	},
	{
		name: 'Protokol Kerberos zajišťuje',
		answers: [
			{
				body: 'Autentizaci',
				right: true
			},
			{
				body: 'Aprobaci',
				right: false
			},
			{
				body: 'Autokracii',
				right: false
			},
			{
				body: 'Akumulaci',
				right: false
			}
		]
	},
	{
		name: 'Pro statickou autentizaci dat (SDA) platí, že:',
		answers: [
			{
				body: 'Potvrzuje pravost pouze statických dat uložených v čipové kartě.',
				right: true
			},
			{
				body: 'Je prováděna pouze platebním terminálem (čip pouze zasílá data)',
				right: true
			},
			{
				body: 'Řeší problém padělání/duplikace karet',
				right: false
			},
			{
				body: 'Potvrzuje pravost statických dat uložených v čipové kartě, ale i dynamických dat zaslaných terminálem',
				right: false
			},
			{
				body: 'Je prováděna pouze čipovou kartou (terminál pouze zasílá data)',
				right: false
			},
			{
				body: 'Potvrzuje pravost statických uložených v čipové kartě, ale i dynamických dat zaslaných čipem',
				right: false
			}
		]
	},
	{
		name: 'V současných SIM (Subscriber Identity Module) kartách pro GSM sítě je uložen:',
		answers: [
			{
				body: 'Statická aplikační data a veřejný certifikát operátora',
				right: false
			},
			{
				body: 'Asymetrický klíč',
				right: false
			},
			{
				body: 'Symetrický klíč',
				right: true
			},
			{
				body: 'Statická aplikační data podepsána soukromým klíčem karty',
				right: false
			}
		]
	},
	{
		name: 'Jaká technologie přihlašování do systému e-bankovnictví (a autorizace transakcí) je nejbezpečnější (z nabízených možností)?',
		answers: [
			{
				body: 'Použití autentizačního kalkulátoru s PINem',
				right: true
			},
			{
				body: 'Použití hesla zadaného částečně na klávesnici a částečně na virtuální klávesnici',
				right: false
			},
			{
				body: 'Použití šifrované autentizační SMS (tj. s využitím SIM Toolkitu)',
				right: false
			},
			{
				body: 'Použití klientského certifikátu, který je uložen na čipové kartě s přístupem chráněným PINem',
				right: false
			}
		]
	},
	{
		name: 'Která z následujících tvrzení jsou platná pro protokol SSL/TLS?',
		answers: [
			{
				body: 'Implicitně je autentizace serveru i klienta vypnuta.',
				right: false
			},
			{
				body: 'SSL/TLS protokol neprovádí elektronické podepisování dat.',
				right: true
			},
			{
				body: 'Implicitně je autentizace serveru a klienta povinná.',
				right: false
			},
			{
				body: 'Implicitně je autentizace serveru povinná, autentizace klienta je volitelná.',
				right: true
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení o uživatelově PINu jsou pravdivá (při standardním nastavení karty)?',
		answers: [
			{
				body: 'Při změně nezablokovaného PINu je třeba zadat starý i nový uživatelský PIN.',
				right: true
			},
			{
				body: 'Při změně nezablokovaného PINu stačí zadat nový uživatelský PIN.',
				right: false
			},
			{
				body: 'Při změně zablokovaného PINu je třeba zadat starý i nový uživatelský PIN.',
				right: false
			},
			{
				body: 'Při změně zablokovaného PINu je třeba zadat odblokovací PIN a nový uživatelský PIN.',
				right: true
			}
		]
	},
	{
		name: 'Praktické problémy biometrik jsou',
		answers: [
			{
				body: 'uživatelé s poškozenými či chybějícími orgány.',
				right: true
			},
			{
				body: 'legislativa a správa charakteristik.',
				right: true
			},
			{
				body: 'nízké FRR (nespokojení uživatelé z důvodu častého odmítnutí).',
				right: false
			},
			{
				body: 'nízké FAR (aplikace s nízkou úrovní bezpečnosti).',
				right: false
			}
		]
	},
	{
		name: 'Autentizace dat znamená',
		answers: [
			{
				body: 'Totéž co integrita',
				right: false
			},
			{
				body: 'Potvrzení, že data nebyla neautorizovaně změněna od doby vytvoření',
				right: true
			},
			{
				body: 'Potvrzení, že data pochází od určitého subjektu',
				right: true
			},
			{
				body: 'Data nemohl odeslat nikdo jiný než jejich původce',
				right: false
			}
		]
	},
	{
		name: 'Jaké kryptografické techniky lze využít pro implementaci autentizace čipu (jako součást EAC) u elektronických pasů?',
		answers: [
			{
				body: 'SHA-1 a 3DES',
				right: false
			},
			{
				body: 'Diffie-Hellman',
				right: true
			},
			{
				body: 'SHA-1 a DSA',
				right: false
			},
			{
				body: 'Fiat-Shamir',
				right: false
			},
			{
				body: 'PGP',
				right: false
			},
			{
				body: 'SHA-2 a AES',
				right: false
			}
		]
	},
	{
		name: 'Detekcí narušení se u čipových karet myslí:',
		answers: [
			{
				body: 'Po narušení jsou stopy narušení obtížně odstranitelné.',
				right: false
			},
			{
				body: 'Odolnost proti pokusům o zjištění robustnosti vůči fyzickým útokům.',
				right: false
			},
			{
				body: 'Vlastnost části systému umožňující detekovat fyzický útok.',
				right: true
			},
			{
				body: 'Při zjištění narušení je automaticky provedena chráněnou části obranná akce.',
				right: false
			}
		]
	},
	{
		name: 'Odpovědí na narušení se u čipových karet myslí:',
		answers: [
			{
				body: 'Automatická akce provedená chráněnou částí při detekci pokusu o narušení.',
				right: true
			},
			{
				body: 'Po úspěšném provedení narušení jsou stopy narušení odstraněny.',
				right: false
			},
			{
				body: 'Vlastnost části systému umožňující detekovat fyzický útok.',
				right: false
			},
			{
				body: 'Akce provedená bezpečnostním administrátorem po zjištění pokusu o narušení.',
				right: false
			}
		]
	},
	{
		name: 'Běžné komerční biometrické zařízení',
		answers: [
			{
				body: 'je vybaveno detekcí průniku nebo má zvýšenou odolnost proti průniku.',
				right: false
			},
			{
				body: 'typicky dobře šifruje přenášená data pomocí kvalitních algoritmů.',
				right: false
			},
			{
				body: 'se neautentizuje vůči dalším komunikujícím.',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených režimů nepodporuje IPsec:',
		answers: [
			{
				body: 'Transportní režim.',
				right: false
			},
			{
				body: 'Dynamický virtuální režim.',
				right: true
			},
			{
				body: 'Tunelovací režim.',
				right: false
			},
			{
				body: 'Překladový režim.',
				right: true
			}
		]
	},
	{
		name: 'Který z výroků o autentizaci na základě dynamiky psaní na klávesnici je pravdivý?',
		answers: [
			{
				body: 'Měří se čas stlačení klávesy a čas mezi stisky kláves.',
				right: true
			},
			{
				body: 'Uživatele je možno autentizovat kontinuálně.',
				right: true
			},
			{
				body: 'K autentizaci stačí běžná klávesnice.',
				right: true
			},
			{
				body: 'Algoritmy pracují na principu srovnávání vzorů (pattern matching) nebo neuronových sítí (neural networks).',
				right: true
			}
		]
	},
	{
		name: 'Na jakém problému je založena bezpečnost RSA',
		answers: [
			{
				body: 'Obchodní cestující',
				right: false
			},
			{
				body: 'Eliptické křivky',
				right: false
			},
			{
				body: 'Faktorizace čísel',
				right: true
			},
			{
				body: 'Diskrétní logaritmus',
				right: false
			}
		]
	},
	{
		name: 'Jednosměrnost u kryptografických hašovacích funkcí znamená',
		answers: [
			{
				body: 'V rozumném čase nejsme schopni najít x, y tak, aby h(x)=h(y)',
				right: false
			},
			{
				body: 'Pro dané y nelze v rozumném čase najít x tak, aby h(x)=y',
				right: true
			},
			{
				body: 'Pro dané h(y) nelze v rozumném čase najít x tak, aby h(x)=h(y)',
				right: false
			},
			{
				body: 'Pro dané y lze v rozumném čase najít x tak, aby h(x)=y',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených kategorií čipových karet podle technologie komunikace rozlišujeme?',
		answers: [
			{
				body: 'Hybridní karty.',
				right: true
			},
			{
				body: 'Bezkontaktní karty.',
				right: true
			},
			{
				body: 'Kontaktní karty.',
				right: true
			},
			{
				body: 'Polymorfní karty.',
				right: false
			}
		]
	},
	{
		name: 'Na jakém druhu kryptografie je založena základní verze Kerbera?',
		answers: [
			{
				body: 'Hybridní',
				right: false
			},
			{
				body: 'Symetrická',
				right: true
			},
			{
				body: 'Asymetrická',
				right: false
			}
		]
	},
	{
		name: 'Biometrické charakteristiky se dělí na',
		answers: [
			{
				body: 'geotypické',
				right: false
			},
			{
				body: 'genotypické',
				right: true
			},
			{
				body: 'biomatické',
				right: false
			},
			{
				body: 'fenotypické',
				right: true
			}
		]
	},
	{
		name: 'Aktualizace klíče se vzájemnou autentizací protokolem AKEP2 (Authenticated Key Exchange Protocol 2)je založena na:',
		answers: [
			{
				body: 'Generátorech passcode',
				right: false
			},
			{
				body: 'Algoritmu MAC (Message Authentication Code)',
				right: true
			},
			{
				body: 'Digitálních podpisech',
				right: false
			},
			{
				body: 'Bez klíčových kryptografických hašovacích funkcích',
				right: false
			}
		]
	},
	{
		name: 'Jaká primární autentizační metoda slouží k automatizované verifikaci identity předkladatele pasu?',
		answers: [
			{
				body: 'Znalost tajemství (v tomto případě PINu) zakódovaného v MRZ',
				right: false
			},
			{
				body: 'Znalost tajemství ověřená pomocí protokolu výzva-odpověď',
				right: false
			},
			{
				body: 'V čipu zakódovaný 128bitový identifikátor (platný typicky 10 let)',
				right: false
			},
			{
				body: 'Biometriky (obličej, otisk prstu, duhovka)',
				right: true
			}
		]
	},
	{
		name: 'Které protokoly umožňují vytvoření sdíleného tajemství?',
		answers: [
			{
				body: 'Protokoly pro ustavení klíče',
				right: true
			},
			{
				body: 'Protokoly implementované v Kerberu',
				right: true
			},
			{
				body: 'Zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí)',
				right: false
			},
			{
				body: 'Silné autentizační protokoly',
				right: false
			}
		]
	},
	{
		name: 'Pro ověření japonského elektronického pasu na českých hranicích je třeba:',
		answers: [
			{
				body: 'CSCA certifikát ČR, který je třeba předem získat diplomatickými prostředky',
				right: false
			},
			{
				body: 'CSCA certifikát Japonska, který si držitel pasu může přinést na CD nebo USB flash disku',
				right: false
			},
			{
				body: 'CSCA certifikát Japonska, který je třeba předem získat diplomatickými prostředky',
				right: true
			},
			{
				body: 'DS certifikát, který je možné vyčíst z pasu',
				right: true
			},
			{
				body: 'CSCA certifikát Japonska, který je možné vyčíst z pasu',
				right: false
			},
			{
				body: 'DS certifikát, který který si držitel pasu musí přinést na CD nebo USB flash disku',
				right: false
			}
		]
	},
	{
		name: 'Co je to narozeninový paradox?',
		answers: [
			{
				body: 'Lze jej ilustrovat faktem, že v sále s 23 lidmi je pravděpodobnost stejného data narození dvou lidí větší než 50 %',
				right: true
			},
			{
				body: 'Situace, kdy se začátkem roků rodí víc mužů než žen',
				right: false
			},
			{
				body: 'Pravděpodobnost nalezení stejného data narození k pevně zvolenému datu je při 23 lidech větší než 50 %',
				right: false
			},
			{
				body: 'Statisticky podložená vysoká úspěšnost nalezení kolize',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených kategorií čipových karet podle technologie uchování a práce s daty rozlišujeme?',
		answers: [
			{
				body: 'Paměťové karty se speciální logikou.',
				right: true
			},
			{
				body: 'Karty s magnetickým proužkem.',
				right: false
			},
			{
				body: 'Paměťové karty.',
				right: true
			},
			{
				body: 'Procesorové karty.',
				right: true
			}
		]
	},
	{
		name: 'Oční duhovka je snímána pomocí',
		answers: [
			{
				body: 'ultrafialového paprsku.',
				right: false
			},
			{
				body: 'černobílé kamery.',
				right: true
			},
			{
				body: 'kvalitní barevné kamery.',
				right: false
			},
			{
				body: 'laserového paprsku s třídou bezpečnosti 1.',
				right: false
			}
		]
	},
	{
		name: 'Mezi chyby biometrických systémů patří',
		answers: [
			{
				body: 'ARR (Acceptance Rejection Rate)',
				right: false
			},
			{
				body: 'EDR (Error Disqualification Rate)',
				right: false
			},
			{
				body: 'FAR (False Acceptance Rate)',
				right: true
			},
			{
				body: 'FRR (False Rejection Rate)',
				right: true
			}
		]
	},
	{
		name: 'Jaké jsou možnosti prevence padělání tokenů?',
		answers: [
			{
				body: 'Modifikace dostupného vybavení (modifikace vybraných barev u kopírky, vkládání identifikátoru).',
				right: true
			},
			{
				body: 'Utajení všech informací nutných ke konstrukci tokenu.',
				right: false
			},
			{
				body: 'Utajení některých informací nutných ke konstrukci tokenu.',
				right: true
			},
			{
				body: 'Čestné prohlášení všech uživatelů systému.',
				right: false
			},
			{
				body: 'Kontrola a licence souvisejících živností.',
				right: true
			},
			{
				body: 'Omezení dostupnosti potřebného vybavení.',
				right: true
			}
		]
	},
	{
		name: 'Digitální podpis ověříme pomocí',
		answers: [
			{
				body: 'Veřejného klíče podepisující osoby',
				right: true
			},
			{
				body: 'Soukromého klíče podepisující osoby',
				right: false
			},
			{
				body: 'Privátního klíče podepisující osoby',
				right: false
			},
			{
				body: 'Certifikátu veřejného klíče podepisující osoby',
				right: true
			},
			{
				body: 'Klíče sdíleného s podepisující osobou',
				right: false
			}
		]
	},
	{
		name: 'Které časově proměnné parametry se používají v kryptografických protokolech?',
		answers: [
			{
				body: 'Monoliticky rostoucí sekvence',
				right: false
			},
			{
				body: 'Náhodná komplexní čísla',
				right: false
			},
			{
				body: 'Náhodné sekvence',
				right: false
			},
			{
				body: 'Náhodná časová razítka',
				right: false
			},
			{
				body: 'Náhodná čísla',
				right: true
			},
			{
				body: 'Časová razítka',
				right: true
			}
		]
	},
	{
		name: 'K čemu slouží soubor .rhosts?',
		answers: [
			{
				body: 'K nastavení adres počítačů s povoleným přihlášením bez další autentizace .',
				right: true
			},
			{
				body: 'Uchování informací o adresách autentizovaných počítačů připojených k serveru.',
				right: false
			},
			{
				body: 'K uchování uživatelů s právem číst (read).',
				right: false
			},
			{
				body: 'K uchování RSA klíče(ů) serveru.',
				right: false
			}
		]
	},
	{
		name: 'Digitální podpis může vytvořit',
		answers: [
			{
				body: 'Pouze osoba vlastnící sdílený klíč',
				right: false
			},
			{
				body: 'Pouze osoba vlastnící soukromý klíč',
				right: true
			},
			{
				body: 'Pouze osoba vlastnící veřejný klíč',
				right: false
			},
			{
				body: 'Pouze osoba vlastnící certifikovaný klíč',
				right: false
			}
		]
	},
	{
		name: 'Které biometrické charakteristiky bývají nazývány také dynamickými?',
		answers: [
			{
				body: 'fyziologické',
				right: false
			},
			{
				body: 'genotypické',
				right: false
			},
			{
				body: 'behaviorální',
				right: true
			},
			{
				body: 'fenotypické',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených útoků na čipové karty nepatří mezi fyzické útoky?',
		answers: [
			{
				body: 'Preparace čipu',
				right: false
			},
			{
				body: 'Odběrová analýza',
				right: true
			},
			{
				body: 'Ozařování čipu',
				right: false
			},
			{
				body: 'Časová analýza',
				right: true
			}
		]
	},
	{
		name: 'Jaký je u ssh rozdíl mezi Server key a Host key?',
		answers: [
			{
				body: 'Server key je krátkodobý klíč použitý pro odvození Host key.',
				right: false
			},
			{
				body: 'Host key je dlouhodobý klíč.',
				right: true
			},
			{
				body: 'Server key je krátkodobý klíč použitý pro vlastní autentizaci serveru.',
				right: true
			},
			{
				body: 'Host key je krátkodobý klíč použitý pro vlastní autentizaci serveru.',
				right: false
			}
		]
	},
	{
		name: 'Co nepatří mezi mechanizmy zabraňující jednodušším útokům na e-bankovnictví s autentizací pouze na základě hesla? ',
		answers: [
			{
				body: 'Anonymizovaný login',
				right: true
			},
			{
				body: 'testy délky a kvality hesla',
				right: false
			},
			{
				body: 'Virtuální klávesnice pro zadávání hesla',
				right: false
			},
			{
				body: 'SSH certifikáty',
				right: true
			},
			{
				body: 'Personalizovaný login',
				right: false
			},
			{
				body: 'SSL certifikáty',
				right: false
			}
		]
	},
	{
		name: 'Jaké typy záznamů lze používat na čipové kartě?',
		answers: [
			{
				body: 'Nestrukturovaná data.',
				right: true
			},
			{
				body: 'Exponenciální záznam s pevnou délkou.',
				right: false
			},
			{
				body: 'Lineární záznamy s pevnou nebo variabilní délkou.',
				right: true
			},
			{
				body: 'Cyklické záznamy.',
				right: true
			}
		]
	},
	{
		name: 'Biometrické technologie mohou být založeny na některém z těchto typů charakteristik:',
		answers: [
			{
				body: 'fyziologický',
				right: true
			},
			{
				body: 'morální',
				right: false
			},
			{
				body: 'environmentální',
				right: false
			},
			{
				body: 'behaviorální',
				right: true
			},
			{
				body: 'chemoterapický',
				right: false
			}
		]
	},
	{
		name: 'Co je to zaručený elektronický podpis',
		answers: [
			{
				body: 'Jednoznačně ověřitelný podpis',
				right: true
			},
			{
				body: 'Podpis, který má záruky srovnatelné jako elektronický podpis',
				right: false
			},
			{
				body: 'Elektronický podpis, za který se dokážeme nějak důvěryhodně zaručit',
				right: false
			},
			{
				body: 'Podpis vytvořený pomocí kryptografických prostředků',
				right: true
			}
		]
	},
	{
		name: 'Která tvrzení platí pro elektronickou značku ',
		answers: [
			{
				body: 'Elektronické značky jsou jednoznačně spojené s označující osobou a umožňují její identifikaci prostřednictvím kvalifikovaného systémového certifikátu',
				right: true
			},
			{
				body: 'Technologicky jde o totéž co zaručený elektronický podpis',
				right: true
			},
			{
				body: 'Ověření elektronické značky je obtížnější než ověření elektronického podpisu',
				right: false
			},
			{
				body: 'Elektronická značka je ke zprávě připojena tak, že je možné detekovat následné změny ve zprávě',
				right: true
			}
		]
	},
	{
		name: 'Co je to Chaffing and winnowing',
		answers: [
			{
				body: 'Pro každý bit zprávy vytvoříme dvě zprávy (správný, chybný MAC), příjemce si ponechá zprávu se správným MAC',
				right: true
			},
			{
				body: 'Zprávu rozdělíme na jednotlivé bity a ty šifrujeme z využitím MAC každý zvlášť',
				right: false
			},
			{
				body: 'Každý bit zprávy zkopírujeme několikrát za sebe, aby se předešlo chybám v důsledku chybovosti MAC komunikačního kanálu',
				right: false
			},
			{
				body: '"Oddělení zrna od plev"',
				right: true
			}
		]
	},
	{
		name: 'Jaké jsou obecné nevýhody tokenů?',
		answers: [
			{
				body: 'Cena tokenů je příliš vysoká pro komerční využití.',
				right: false
			},
			{
				body: 'Bez tokenu není autorizovaný uživatel rozpoznán.',
				right: true
			},
			{
				body: 'Ztráta tokenu vede většinou ke kompromitaci celého systému.',
				right: false
			},
			{
				body: 'Ke kontrole je obvykle třeba speciální čtečka nebo vycvičená osoba.',
				right: true
			}
		]
	},
	{
		name: 'V dobrých autentizačních protokolech se typicky ',
		answers: [
			{
				body: 'Heslo posílá v hašované podobě',
				right: true
			},
			{
				body: 'Heslo neposílá vůbec',
				right: true
			},
			{
				body: 'Heslo posílá v otevřené podobě',
				right: false
			}
		]
	},
	{
		name: 'Proces použití biometrik pro autentizaci zahrnuje',
		answers: [
			{
				body: 'registraci',
				right: true
			},
			{
				body: 'verifikaci',
				right: true
			},
			{
				body: 'degustaci',
				right: false
			},
			{
				body: 'demonstraci',
				right: false
			}
		]
	},
	{
		name: 'Decentralizovaná správa řízení přístupu k objektu znamená',
		answers: [
			{
				body: 'klíč (totožný) od budovy má víc lidí',
				right: false
			},
			{
				body: 'přístupová práva nastavují příslušní vlastníci jednotlivých objektů',
				right: true
			},
			{
				body: 'obtížnou komunikaci mezi držiteli jednotlivých částí přístupového hesla či jiného tokenu',
				right: false
			},
			{
				body: 'pro přístup k objektu je třeba shromáždit hesla či jiné tokeny rozdistribuované mezi více lidí',
				right: false
			},
			{
				body: 'řízení přístupu provádí více autorizačních systémů zaráz',
				right: false
			}
		]
	},
	{
		name: 'Co je to semi-invazivní časová analýza?',
		answers: [
			{
				body: 'Druh semi-invazivního útoku zneužívající u mnohých čipových karet možnost ovlivnění vstupního hodinového cyklu.',
				right: false
			},
			{
				body: 'Speciální semi-invazivní útok na autentizační kalkulátor s hodinami.',
				right: false
			},
			{
				body: 'žádná z výše uvedených odpovědí.',
				right: true
			},
			{
				body: 'Metrika sloužící k určení a vyhodnocení efektivnosti semi-invazivních útoků.',
				right: false
			}
		]
	},
	{
		name: 'Útok na čipové karty pomocí indukce chyb je založen na:',
		answers: [
			{
				body: 'Využití chybného běhu algoritmu po prudkém ovlivnění vnějších podmínek k získání tajných dat.',
				right: true
			},
			{
				body: 'Využití indukce chyb po prudkém ovlivnění vnějších podmínek k testování změny chování algoritmu.',
				right: true
			},
			{
				body: 'Jako první krok útoku je provedeno fyzického poškození.',
				right: false
			},
			{
				body: 'Využití opravných kódů pro automatické odstranění chyby po prudkém ovlivnění vnějších podmínek.',
				right: false
			}
		]
	},
	{
		name: 'Jaké jsou hlavní výhody biometrik',
		answers: [
			{
				body: 'rychlé a (relativně) přesné výsledky.',
				right: true
			},
			{
				body: 'nemůžeme je ztratit, zapomenout nebo předat jiné osobě.',
				right: true
			},
			{
				body: 'jsou tajné.',
				right: false
			},
			{
				body: 'jednoduchá správa vzorků.',
				right: false
			}
		]
	},
	{
		name: 'Jaký mechanismus je použit pro zajištění bezpečnosti v autentizační hlavičce IPsec?',
		answers: [
			{
				body: 'Message Authentication Code se sekvenčním číslem.',
				right: true
			},
			{
				body: 'Diffie-Hellman autentizace bez klíčů.',
				right: false
			},
			{
				body: 'Message Authentication Code s náhodným číslem.',
				right: false
			},
			{
				body: 'Digitální podpis využívající RSA nebo DSA.',
				right: false
			}
		]
	},
	{
		name: 'Co patří mezi bezpečnostní problémy používání bankovních karet s čipem?',
		answers: [
			{
				body: 'Možnost odpozorování PINu na frekventovaných místech.',
				right: true
			},
			{
				body: 'Špatná průkaznost nelegitimní autorizace platby pomocí PINu.',
				right: true
			},
			{
				body: 'Velká obtížnost kopírování karty.',
				right: false
			},
			{
				body: 'Výpočetní výkon nepostačuje pro kryptografické zabezpečení transakcí.',
				right: false
			}
		]
	},
	{
		name: 'Na co není výhodné použít biometriky ',
		answers: [
			{
				body: 'na autentizaci dat.',
				right: true
			},
			{
				body: 'na ochranu přístupu k tajnému klíči.',
				right: false
			},
			{
				body: 'na doplňkovou formu autentizace.',
				right: false
			}
		]
	},
	{
		name: 'Na jaké vrstvě funguje protokol SSL/TLS?',
		answers: [
			{
				body: 'mez aplikační a datovou vrstvou',
				right: true
			},
			{
				body: 'na linkové vrstvě',
				right: false
			},
			{
				body: 'na síťové vrstvě',
				right: false
			},
			{
				body: 'na datové vrstvě',
				right: false
			}
		]
	},
	{
		name: 'Jaké vlastnosti má základní řízení přístupu (BAC) u elektronických pasů? ',
		answers: [
			{
				body: 'Tajný klíč lze získat z dat v MRZ',
				right: true
			},
			{
				body: 'Umožňuje ustavení sdíleného symetrického klíče',
				right: true
			},
			{
				body: 'Tajný klíč lze získat pouze z dat uložených v čipu',
				right: false
			},
			{
				body: 'Umožňuje explicitní autorizace pro přístup k citlivým datům',
				right: false
			}
		]
	},
	{
		name: 'Úspěšné odposlechnutí citlivých dat ze sběrnice platebního terminálu může vést: ',
		answers: [
			{
				body: 'K přečtení citlivých informací banky (sdílené tajné klíče uložené v terminálu)',
				right: false
			},
			{
				body: 'K modifikaci nepodepsaného seznamu podporovaných verifikačních metod (CVM)',
				right: true
			},
			{
				body: 'K získání přesné kopie dat na magnetickém proužku',
				right: true
			},
			{
				body: 'K získání PINu',
				right: true
			},
			{
				body: 'K narušení anonymity jednotlivých komunikujících stran',
				right: false
			},
			{
				body: 'K modifikaci podepsaného seznamu podporovaných verifikačních metod (CVM)',
				right: false
			}
		]
	},
	{
		name: 'Autentizace v soudobých systémech e-bankovnictví je výhradně',
		answers: [
			{
				body: 'Třífaktorová',
				right: false
			},
			{
				body: 'žádná z dalších odpovědí není správně',
				right: true
			},
			{
				body: 'Dvoufaktorová',
				right: false
			},
			{
				body: 'Jednofaktorová',
				right: false
			}
		]
	},
	{
		name: 'Forenzní řešení biometrik popisují tyto výroky',
		answers: [
			{
				body: 'výsledek identifikace je získán obvykle za 1s či rychleji.',
				right: false
			},
			{
				body: 'miniaturizace zařízení je jedním z hlavním cílů.',
				right: false
			},
			{
				body: 'pro používání je nutná odborná znalost systému.',
				right: true
			},
			{
				body: 'cena je vysoká, ale s tím se počítá.',
				right: true
			}
		]
	},
	{
		name: 'Soubor /etc/passwd může obsahovat',
		answers: [
			{
				body: 'Datum a čas posledního úspěšného přihlášení do systému',
				right: false
			},
			{
				body: 'Počet zbývajících neúspěšných pokusů o zadání hesla',
				right: false
			},
			{
				body: 'Haše hesel uživatelů',
				right: true
			},
			{
				body: 'Informaci o délce hesla',
				right: false
			},
			{
				body: 'Informaci o tom, že haše hesel jsou v souboru /etc/shadow',
				right: true
			}
		]
	},
	{
		name: 'Pro autentizaci obrazovou informací platí',
		answers: [
			{
				body: 'Uživatel musí správně vybarvit předložený obrázek',
				right: false
			},
			{
				body: 'Uživatel musí do systému nahrát správný obrázek',
				right: false
			},
			{
				body: 'Uživatel musí systému slovně popsat obrázek sloužící k autentizaci',
				right: false
			},
			{
				body: 'Uživatel musí vybrat správný obrázek nebo jeho část',
				right: true
			}
		]
	},
	{
		name: 'Na čem podle specifikace EMV závisí dohoda autentizační metody uživatele?',
		answers: [
			{
				body: 'Rozhodnutí přísluší plně platebnímu terminálu',
				right: false
			},
			{
				body: 'Na prioritně uspořádaném seznamu podporovaných verifikačních metod (CVM)',
				right: true
			},
			{
				body: 'Na tom, zdali má být prováděna transakce on-line či offline',
				right: false
			},
			{
				body: 'Na konkrétní implementaci statické, dynamické či kombinované autentizace dat',
				right: false
			}
		]
	},
	{
		name: 'Pro bezpečné používání digitálního podpisu',
		answers: [
			{
				body: 'Je nutné zajistit integritu privátního klíče',
				right: false
			},
			{
				body: 'Je nutné zajistit integritu veřejného klíče',
				right: true
			},
			{
				body: 'Je nutné udržet privátní klíč v tajnosti',
				right: true
			},
			{
				body: 'Je nutné udržet veřejný klíč v tajnosti',
				right: false
			}
		]
	},
	{
		name: 'V současných českých elektronických pasech musí být uloženy soubory obsahující: ',
		answers: [
			{
				body: 'Kvalifikovaný certifikát držitele pasu (vydaný akreditovanou CA)',
				right: false
			},
			{
				body: 'Haš soukromého klíče čipu, zajišťující integritu daného klíče',
				right: false
			},
			{
				body: 'Digitálně podepsané haše všech tzv. DG souborů',
				right: true
			},
			{
				body: 'Barevnou fotografii držitele pasu (formát JPEG/JPG2000) a otisky prstů (komprese WSQ)',
				right: true
			}
		]
	},
	{
		name: 'Co je vyžadováno pro autentizaci transakce při offline verifikaci se šifrováním PINu?',
		answers: [
			{
				body: 'Originální PIN nutný pro verifikaci, který musí být bezpečně uložen v čipu',
				right: true
			},
			{
				body: 'Fyzicky i prostředím dobře zabezpečený PINpad',
				right: true
			},
			{
				body: 'Úspěšné proběhnutí automatické správy rizik',
				right: false
			},
			{
				body: 'Nový RSA pár klíčů pro šifrování PINů',
				right: true
			}
		]
	},
	{
		name: 'Jaké jsou obecné výhody tokenů?',
		answers: [
			{
				body: 'Rychlé zjištění ztráty.',
				right: true
			},
			{
				body: 'Mohou zpracovávat a přenášet další informace.',
				right: true
			},
			{
				body: 'Nikdy je nelze zneužít po náhodném nálezu.',
				right: false
			},
			{
				body: 'Většinou nejsou jednoduše kopírovatelné.',
				right: true
			}
		]
	},
	{
		name: 'Která z následujících tvrzení jsou platná pro protokol SSL/TLS?',
		answers: [
			{
				body: 'Autentizace komunikujících stran je založena na symetrické kryptografii.',
				right: false
			},
			{
				body: 'Po průběhu Handshake protokolu je komunikace šifrována symetrickým klíčem.',
				right: true
			},
			{
				body: 'SSL/TLS protokol zajišťuje integritu a autenticitu dat.',
				right: true
			},
			{
				body: 'Po úvodní Handshake protokolu je komunikace šifrována veřejným klíčem příjemce.',
				right: false
			}
		]
	},
	{
		name: 'Jaké jsou typické velikosti pamětí u současných čipových karet?',
		answers: [
			{
				body: '\u003c 100KB RAM, \u003c 100KB ROM, \u003e 1MB EEPROM',
				right: false
			},
			{
				body: '\u003e 256KB RAM, ~100KB ROM, \u003c 100KB EEPROM',
				right: false
			},
			{
				body: '~128KB RAM, ~512KB ROM, ~512KB EEPROM',
				right: false
			},
			{
				body: '\u003c 10KB RAM, ~100KB ROM, \u003c 100KB EEPROM',
				right: true
			}
		]
	},
	{
		name: 'Z jakého důvodu se používá Server key namísto Host key pro vlastní autentizaci u SSH?',
		answers: [
			{
				body: 'Zrychlení procesu autentizace klienta vůči serveru.',
				right: false
			},
			{
				body: 'Pro zajištění kompatibility s protokolem telnet.',
				right: false
			},
			{
				body: 'Ochrana dlouhodobého klíče Host key před kompromitováním.',
				right: true
			},
			{
				body: 'Zrychlení procesu autentizace serveru vůči klientovi.',
				right: false
			}
		]
	},
	{
		name: 'Které z protokolů se v současnosti v běžných aplikacích využívají více?',
		answers: [
			{
				body: 'Challenge-response protokoly (protokoly výzva-odpověď)',
				right: true
			},
			{
				body: 'Zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí)',
				right: false
			}
		]
	},
	{
		name: 'Biometrická data při opakovaném měření kvalitním zařízením',
		answers: [
			{
				body: 'jsou vždy shodná na 99 % a víc.',
				right: false
			},
			{
				body: 'nejsou nikdy shodná na 100 %.',
				right: true
			},
			{
				body: 'nejsou nikdy shodná na 100 % až na otisky prstů.',
				right: false
			},
			{
				body: 'jsou typicky shodná na 100 %.',
				right: false
			}
		]
	},
	{
		name: 'IP spoofing označuje:',
		answers: [
			{
				body: 'Podvržení IP adresy příjemce.',
				right: false
			},
			{
				body: 'Zachycení IP adresy odesílatele i příjemce.',
				right: false
			},
			{
				body: 'Zachycení IP odesílatele.',
				right: false
			},
			{
				body: 'Podvržení IP adresy odesílatele.',
				right: true
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení o autentizačních kalkulátorech jsou pravdivá?',
		answers: [
			{
				body: 'Přístup k využití kalkulátoru může být chráněn PINem.',
				right: true
			},
			{
				body: 'Pracují na principu protokolu výzva/odpověď s využitím tajné informace.',
				right: true
			},
			{
				body: 'Kalkulátor nelze zneužít i při znalosti PINu.',
				right: false
			},
			{
				body: 'Výzva je zadávána manuálně nebo automaticky načtena z vhodného média.',
				right: true
			}
		]
	},
	{
		name: 'Odolností vůči narušení se u čipových karet myslí:',
		answers: [
			{
				body: 'Automatická akce provedená chráněnou částí při zjištění pokusu o narušení.',
				right: false
			},
			{
				body: 'Vlastnost části systému umožňující detekovat fyzický útok.',
				right: false
			},
			{
				body: 'Vlastnost části systému chráněné proti neautorizované modifikaci podstatně lépe než zbylá část systému.',
				right: true
			},
			{
				body: 'Ochrana proti útoku rušením radiového signálu (RFID).',
				right: false
			}
		]
	},
	{
		name: 'Proč je u tokenů založených na hodinách potřeba řešit otázku posuvu hodin?',
		answers: [
			{
				body: 'Pravým důvodem je přechod na letní/zimní čas a přestupné roky.',
				right: false
			},
			{
				body: 'žádná z výše uvedených odpovědí.',
				right: false
			},
			{
				body: 'Nutnost synchronizace drobných odchylek mezi serverem a tokenem.',
				right: true
			}
		]
	},
	{
		name: 'Matice přístupových práv',
		answers: [
			{
				body: 'je reprezentace standardních přístupových práv v unixových OS (RWX-RWX-RWX)',
				right: false
			},
			{
				body: 'zaznamenává pro každý objekt a každý subjekt údaje o čase, trvání, ... přístupu daného subjektu k danému objektu',
				right: false
			},
			{
				body: 'má alespoň dva rozměry - subjekt a objekt',
				right: true
			},
			{
				body: 'může mít i tři rozměry - subjekt, objekt a uživatel',
				right: false
			},
			{
				body: 'definuje přinejmenším to, jaká přístupová práva mají jednotlivé subjekty k jednotlivým objektům',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených útoků na čipové karty nepatří mezi logické útoky?',
		answers: [
			{
				body: 'Časová analýza',
				right: false
			},
			{
				body: 'Útok přes aplikační rozhraní',
				right: false
			},
			{
				body: 'Ozařování čipu',
				right: true
			},
			{
				body: 'Preparace čipu',
				right: true
			}
		]
	},
	{
		name: 'Autentizace pomocí verifikace hlasu probíhá typicky',
		answers: [
			{
				body: 'pomocí běžného mikrofonu.',
				right: true
			},
			{
				body: 'pomocí soustavy mikrofonů rozmístěných ve vzdálenosti cca 0,5 m ve 4 směrech.',
				right: false
			},
			{
				body: 'v samostatné odhlučněné komoře, pro odstranění okolního šumu.',
				right: false
			},
			{
				body: 'využitím telefonu.',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených typů autentizačních kalkulátorů se používají v IT bezpečnosti?',
		answers: [
			{
				body: 'Kalkulátor s hodinami.',
				right: true
			},
			{
				body: 'Kalkulátor s tajnou informací.',
				right: true
			},
			{
				body: 'Kalkulátor bez vstupní klávesnice.',
				right: true
			},
			{
				body: 'Kalkulátor s vestavěným budíkem (z angl. embedded alarm).',
				right: false
			}
		]
	},
	{
		name: 'Pro ss-vlastnost modelu Bell-LaPadula platí: ',
		answers: [
			{
				body: 'je považována za nebezpečnou a není doporučováno ji používat',
				right: false
			},
			{
				body: 'účelem je ochránit důvěrnost citlivých dat',
				right: true
			},
			{
				body: 'procesy nesmějí zapisovat data do nižší úrovně',
				right: false
			},
			{
				body: 'zachovává integritu dat',
				right: false
			},
			{
				body: 'procesy nesmějí číst data na vyšší úrovni',
				right: true
			}
		]
	},
	{
		name: 'Které z výroků o autentizaci na základě rozpoznání obličeje nejsou pravdivé?',
		answers: [
			{
				body: 'Autentizaci komplikuje osvětlení a pozadí.',
				right: false
			},
			{
				body: 'Přesnost se v posledních 5 letech příliš nezlepšila.',
				right: true
			},
			{
				body: 'Jedná se o velice výpočetně náročnou metodu autentizace.',
				right: false
			},
			{
				body: 'Autentizaci komplikuje změna účesu, náušnice a brýle.',
				right: false
			}
		]
	},
	{
		name: '"Solení" hesel',
		answers: [
			{
				body: 'Pomůže vyřešit situaci, kdy mají uživatelé stejná hesla',
				right: true
			},
			{
				body: 'Zajistí delší efektivní heslo',
				right: true
			},
			{
				body: 'Je dodatečná technika při ukládání hesel pro určitou formu identifikace',
				right: false
			},
			{
				body: 'Je dnes již jen velmi zřídka používaná technika',
				right: false
			}
		]
	},
	{
		name: 'Útok na čipové karty pomocí odběrové analýzy využívá: ',
		answers: [
			{
				body: 'Závislost průběhu odběru proudu na ukládaných datech do paměti EEPROM.',
				right: true
			},
			{
				body: 'Data získaná odběrem vzorku paměti EEPROM.',
				right: false
			},
			{
				body: 'Závislost průběhu odběru proudu na zpracovávaných datech.',
				right: true
			},
			{
				body: 'Závislost průběhu odběru proudu na prováděné instrukci.',
				right: true
			}
		]
	},
	{
		name: 'Co je to CVV2?',
		answers: [
			{
				body: 'Druhý kontrolní součet uložený na magnetickém proužku (slouží k detekci dvoubitových a opravě jednobitových chyb)',
				right: false
			},
			{
				body: 'Hodnota vytištěná na zadní straně karty (sloužící jako dodatečný zabezpečovací mechanizmus pro platby kartou přes Internet)',
				right: true
			}
		]
	},
	{
		name: 'Pokud ukládáme hesla šifrovaně',
		answers: [
			{
				body: 'Musíme věřit administrátorovi',
				right: true
			},
			{
				body: 'Musíme znát (jako uživatelé) šifrovací klíč',
				right: false
			},
			{
				body: 'Nesmí být použit šifrovací algoritmus DSA',
				right: false
			},
			{
				body: 'Šifrovací klíč musí být přístupný autentizační službě',
				right: true
			}
		]
	},
	{
		name: 'Jak eliminujeme útoky hrubou silou na PINy?: ',
		answers: [
			{
				body: 'Pravidelnou změnou hodnoty PINu',
				right: false
			},
			{
				body: 'Omezením počtu pokusů o zadání PINu',
				right: true
			},
			{
				body: 'školením uživatelů',
				right: false
			}
		]
	},
	{
		name: 'Pro pojem výpočetní bezpečnost platí následující tvrzení. ',
		answers: [
			{
				body: 'Výsledek náročného výstupu je podepsaný, z důvodu zaručení integrity',
				right: false
			},
			{
				body: 'Časová náročnost prolomení určitého algoritmu mnohonásobně převyšuje dostupný výpočetní výkon',
				right: true
			},
			{
				body: 'Algoritmus jako takový nemusí být považován za neprolomitelný, dosud pouze nebyl nalezen efektivní způsob řešení/výpočtu',
				right: true
			},
			{
				body: 'Ani jedno z uvedených tvrzení neplatí',
				right: false
			}
		]
	},
	{
		name: 'K čemu slouží autentizační agent u ssh?',
		answers: [
			{
				body: 'K autentizaci dat přenášených mezi serverem a uživatelem.',
				right: false
			},
			{
				body: 'Opakované požadavky vyžadující heslo řeší agent po prvním zadání automaticky.',
				right: true
			},
			{
				body: 'Automaticky autentizuje server vůči uživateli bez nutnosti zadávat opakovaně heslo.',
				right: false
			},
			{
				body: 'Autentizační agent se u ssh nepoužívá, neboť je použita asymetrická kryptografie.',
				right: false
			}
		]
	},
	{
		name: 'Mezi metody volitelného řízení přístupu patří: ',
		answers: [
			{
				body: 'Hašování dat.',
				right: false
			},
			{
				body: 'Přihlašování doplňkovou biometrikou.',
				right: false
			},
			{
				body: 'Seznamy přístupových práv.',
				right: true
			},
			{
				body: 'Bell-LaPadula.',
				right: false
			}
		]
	},
	{
		name: 'k čemu slouží MAC (Message authentication code)',
		answers: [
			{
				body: 'K zajištění důvěrnosti',
				right: false
			},
			{
				body: 'K zajištění integrity',
				right: true
			},
			{
				body: 'K ověření zprávy síťové karty',
				right: false
			},
			{
				body: 'K detekci chyb při přenosu dat',
				right: true
			},
			{
				body: 'K transformaci hašovací funkce',
				right: false
			}
		]
	},
	{
		name: 'Při kombinaci šifrování veřejným klíčem a podpisu dokumentu se doporučuje operace provést v následujícím pořadí:',
		answers: [
			{
				body: 'Podpis, šifrování, podpis',
				right: false
			},
			{
				body: 'Šifrování, podpis, šifrování',
				right: false
			},
			{
				body: 'Šifrování, podpis',
				right: false
			},
			{
				body: 'Na pořadí operací nezáleží',
				right: false
			},
			{
				body: 'Podpis, šifrování',
				right: true
			}
		]
	},
	{
		name: 'Základní bezpečnostní problémy RFID jsou: ',
		answers: [
			{
				body: 'Interference',
				right: true
			},
			{
				body: 'Idempotence',
				right: false
			},
			{
				body: 'Nepolapitelnost',
				right: false
			},
			{
				body: 'Autentizace',
				right: true
			},
			{
				body: 'Soukromí',
				right: true
			},
			{
				body: 'Nepopiratelnost',
				right: false
			}
		]
	},
	{
		name: 'U dynamiky podpisu je důležitý ',
		answers: [
			{
				body: 'aretačně-dynamický tablet.',
				right: false
			},
			{
				body: 'čas potřebný pro provedení podpisu.',
				right: true
			},
			{
				body: 'pořadí jednotlivých tahů pera.',
				right: true
			},
			{
				body: 'výsledný podpis.',
				right: false
			}
		]
	},
	{
		name: 'Zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí) umožňují, poctivým stranám vždy dosáhnout úspěšného výsledku. Tato vlastnost se nazývá:',
		answers: [
			{
				body: 'Částečné uspokojení (partial satisfaction)',
				right: false
			},
			{
				body: 'Úplnost (completeness)',
				right: true
			},
			{
				body: 'Korektnost (soundness)',
				right: false
			},
			{
				body: 'Úplné uspokojení (complete satisfaction)',
				right: false
			}
		]
	},
	{
		name: 'Základní fakta o biometrických systémech jsou:',
		answers: [
			{
				body: 'kopírování biometrik nemusí být triviální, ale není obtížné.',
				right: true
			},
			{
				body: 'biometrická data mohou být velmi citlivé informace.',
				right: true
			},
			{
				body: 'biometrická data jsou tajná.',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených možností nezajišťuje protokol IPsec?',
		answers: [
			{
				body: 'Ochranu proti analýze šifrovaného provozu na síťové vrstvě.',
				right: true
			},
			{
				body: 'Integrita a autentizace původu dat.',
				right: false
			},
			{
				body: 'Nepopiratelnost přijetí dat.',
				right: true
			},
			{
				body: 'Důvěrnost dat, ochrana proti přehrání.',
				right: false
			}
		]
	},
	{
		name: 'U autentizace pomocí hesel',
		answers: [
			{
				body: 'Musíme řešit aspekt zapamatovatelnosti vs. bezpečnosti',
				right: true
			},
			{
				body: 'Musíme řešit aspekt bezpečnosti bez ohledu na zapamatovatelnost',
				right: false
			},
			{
				body: 'Musí uživatel prokázat, že si dokáže zapamatovat alespoň 10 náhodně zvolených symbolů',
				right: false
			}
		]
	},
	{
		name: 'Jaké bezpečnostní problémy lze identifikovat v soudobém bankovnictví? ',
		answers: [
			{
				body: 'Použití pouze asymetrické kryptografie v kombinaci s hašovacími funkcemi (pouze pro podpisy)',
				right: false
			},
			{
				body: 'Dodatečné autorizační SMS zprávy jen u některých operací e-bankovnictví',
				right: true
			},
			{
				body: 'Nedostatečné zabezpečení platebních terminálů',
				right: true
			},
			{
				body: 'Použití autentizačních kalkulátorů',
				right: false
			},
			{
				body: 'Social engineering např. při telefonním hovoru',
				right: true
			},
			{
				body: 'Zasílání embosované karty poštou a nedostatečně zabezpečené doručování PINu a hesla',
				right: true
			}
		]
	},
	{
		name: 'Pravděpodobnost, že se nepoctivý útočník může úspěšně vydávat za jinou stranu je u zero-knowledge protokolů (protokoly s nulovým rozšířením znalostí) mizivá. Tato vlastnost se nazývá:',
		answers: [
			{
				body: 'Částečné uspokojení (partial satisfaction)',
				right: false
			},
			{
				body: 'Korektnost (soundness)',
				right: true
			},
			{
				body: 'Úplné uspokojení (complete satisfaction)',
				right: false
			},
			{
				body: 'Úplnost (completeness)',
				right: false
			}
		]
	},
	{
		name: 'Které biometrické charakteristiky bývají nazývány také statickými?',
		answers: [
			{
				body: 'fenotypické',
				right: false
			},
			{
				body: 'behaviorální',
				right: false
			},
			{
				body: 'fyziologické',
				right: true
			},
			{
				body: 'genotypické',
				right: false
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení o tokenech založených na hodinách jsou pravdivá: ',
		answers: [
			{
				body: 'Token s hodinami nelze použít bez přítomnosti klávesnice.',
				right: false
			},
			{
				body: 'Autentizační hodnota je vygenerována na základě aktuálního času a tajné informace.',
				right: true
			},
			{
				body: 'Přístup k využití tokenu s hodinami musí být vždy chráněn PINem.',
				right: false
			},
			{
				body: 'Je potřeba řešit otázku synchronizace hodin mezi serverem a tokenem.',
				right: true
			}
		]
	},
	{
		name: 'Mezi obecné výhody tokenů nepatří: ',
		answers: [
			{
				body: 'Obtížná kopírovatelnost.',
				right: false
			},
			{
				body: 'Snadné zjištění ztráty.',
				right: false
			},
			{
				body: 'Snadná detekce a odpověď na narušení.',
				right: true
			},
			{
				body: 'Možnost zpracovávání informací.',
				right: false
			}
		]
	},
	{
		name: 'Pro vztah řízení přístupu a autentizace platí:',
		answers: [
			{
				body: 'jedná se o dva naprosto nesouvisející pojmy',
				right: false
			},
			{
				body: 'jde o ekvivalentní termíny',
				right: false
			},
			{
				body: 'řízení přístupu je obvyklou podmínkou pro autentizaci',
				right: false
			},
			{
				body: 'autentizace je obvyklou podmínkou pro řízení přístupu',
				right: true
			}
		]
	},
	{
		name: 'Které z níže uvedených typů protokolů existují? ',
		answers: [
			{
				body: 'Autentizační protokoly bez ustavení klíče',
				right: true
			},
			{
				body: 'Zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí) pro ustavení klíče.',
				right: false
			},
			{
				body: 'Autentizované protokoly pro ustavení klíče',
				right: true
			},
			{
				body: 'Protokoly pro ustavení klíče',
				right: true
			},
			{
				body: 'Neautentizované protokoly pro ustavení klíče',
				right: true
			}
		]
	},
	{
		name: 'Čím je dáno, že komunikace s RFID tagem musí probíhat pouze na přímou viditelnost? ',
		answers: [
			{
				body: 'Použitými kryptografickými mechanizmy',
				right: false
			},
			{
				body: 'Použitou vlnovou délkou',
				right: true
			},
			{
				body: 'Použitým frekvenčním pásmem',
				right: true
			},
			{
				body: 'Množstvím přenášených dat',
				right: false
			}
		]
	},
	{
		name: 'Které z příkladů autentizace počítačů jsou možné: ',
		answers: [
			{
				body: 'Privátním klíčem asymetrické kryptografie.',
				right: true
			},
			{
				body: 'Kombinace IP, MAC, GUID (global unique identifier).',
				right: false
			},
			{
				body: 'Kombinace IP adresy a tajného klíče symetrické kryptografie.',
				right: false
			},
			{
				body: 'Tajným klíčem symetrické kryptografie.',
				right: true
			}
		]
	},
	{
		name: 'Která z následujících tvrzení jsou platná pro protokol SSL/TLS?',
		answers: [
			{
				body: 'SSL/TLS protokol nezajišťuje důvěrnost dat.',
				right: false
			},
			{
				body: 'Implicitně je autentizace serveru a klienta je povinná.',
				right: false
			},
			{
				body: 'Autentizace komunikujících stran je založena na asymetrické kryptografii.',
				right: true
			},
			{
				body: 'SSL/TLS protokol umožňuje vzájemnou autentizaci serveru a klienta.',
				right: true
			}
		]
	},
	{
		name: 'Mezi nejslibnější technologie v oblasti identifikace v počítačových systémech pomocí biometrik nepatří',
		answers: [
			{
				body: 'otisk prstu.',
				right: false
			},
			{
				body: 'tvar ruky.',
				right: true
			},
			{
				body: 'ověření mluvčího.',
				right: false
			},
			{
				body: 'snímání oční duhovky.',
				right: false
			},
			{
				body: 'DNA.',
				right: true
			}
		]
	},
	{
		name: 'Která z tvrzení jsou platná pro termín "separace oprávnění" při řízení přístupu',
		answers: [
			{
				body: 'týká se rozlišení procesů autentizace a autorizace',
				right: false
			},
			{
				body: 'žádní dva uživatelé systému nesmějí mít nikdy stejná oprávnění',
				right: false
			},
			{
				body: 'označuje stav, kdy je k provedení operace nutný souhlas více osob',
				right: true
			},
			{
				body: 'tento termín neexistuje',
				right: false
			},
			{
				body: 'vyjadřuje skutečnost, že se jednotlivé úrovně oprávnění nesmí překrývat',
				right: false
			}
		]
	},
	{
		name: 'Která z následujících tvrzení platí pro princip nejmenších privilegií:',
		answers: [
			{
				body: 'žádný uživatel nemá přístup k objektům, které nepotřebuje',
				right: true
			},
			{
				body: 'k objektu nemají přístup uživatelé, kteří jej nezbytně nepotřebují',
				right: true
			},
			{
				body: 'uživatelé systému mají na počátku nejvyšší možná oprávnění',
				right: false
			},
			{
				body: 'označuje stav, kdy je k provedení operace nutný souhlas více osob',
				right: false
			},
			{
				body: 'přístup k souboru má pouze uživatel s menšími privilegii než administrátor',
				right: false
			}
		]
	},
	{
		name: 'Pokud při kontrole japonského pasu na českých hranicích není k dispozici CSCA certifikát Japonska: ',
		answers: [
			{
				body: 'nic se neděje protože není vůbec potřeba',
				right: false
			},
			{
				body: 'lze alternativně použít CSCA certifikát České republiky',
				right: false
			},
			{
				body: 'lze ověřit platnost dat v pasu, jen pokud haše DG souborů odpovídají obsahu DG souborů',
				right: false
			},
			{
				body: 'nelze ověřit platnost dat v čipu pasu',
				right: true
			}
		]
	},
	{
		name: 'Markanta v oblasti biometrik znamená:',
		answers: [
			{
				body: 'Významný bod v otisku prstu.',
				right: true
			},
			{
				body: 'Výrazné poškození dané biometriky u konkrétního uživatele.',
				right: false
			},
			{
				body: 'Zpracovaný obraz oční duhovky se zvýrazněnými přechody.',
				right: false
			},
			{
				body: 'Biometrická technologie s významně vysokou hodnotou EER.',
				right: false
			}
		]
	},
	{
		name: 'Zajistit autentizaci digitálních dat a zpráv lze ',
		answers: [
			{
				body: 'Pomocí klasického (ručního) podpisu',
				right: false
			},
			{
				body: 'Pomocí zaručeného elektronického podpisu',
				right: true
			},
			{
				body: 'Pomocí MAC',
				right: true
			},
			{
				body: 'Pomocí klíčované hašovací funkce',
				right: true
			},
			{
				body: 'Pomocí parciálně zaručeného elektronického podpisu',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených typů karet se používají v IT bezpečnosti?',
		answers: [
			{
				body: 'Kontaktní karty s čipem.',
				right: true
			},
			{
				body: 'Karty s bezkontaktním magnetickým proužkem.',
				right: false
			},
			{
				body: 'Bezkontaktní karty s čipem.',
				right: true
			},
			{
				body: 'SIM karty v mobilních telefonech.',
				right: true
			}
		]
	},
	{
		name: 'Proti jakým útokům brání protokol ssh?',
		answers: [
			{
				body: 'Odposlech hesla a pozdější přehrání (na uživatelově PC)',
				right: false
			},
			{
				body: 'Analýza šifrovaného provozu na síťové vrstvě',
				right: false
			},
			{
				body: 'Odposlech hesla a pozdější přehrání (na síťové vrstvě)',
				right: true
			},
			{
				body: 'DNS/IP/Routing spoofing',
				right: true
			}
		]
	},
	{
		name: 'Která z tvrzení o mechanismu SUID platí: ',
		answers: [
			{
				body: 'přiděluje se konkrétním uživatelům při vytváření účtů',
				right: false
			},
			{
				body: 'umožňuje kontrolovatelné spouštění zavirovaných programů bez ID',
				right: false
			},
			{
				body: 'může přidělovat administrátorská práva konkrétním procesům',
				right: true
			},
			{
				body: 'propůjčuje skupinu vlastníka souboru tomu, kdo jej spouští',
				right: false
			},
			{
				body: 'propůjčuje identitu vlastníka souboru tomu, kdo jej spouští',
				right: true
			}
		]
	},
	{
		name: 'Zjistitelností narušení se u čipových karet myslí: ',
		answers: [
			{
				body: 'Po narušení jsou stopy narušení obtížně odstranitelné.',
				right: true
			},
			{
				body: 'Při zjištění narušení je automaticky provedena chráněnou částí obranná akce.',
				right: false
			},
			{
				body: 'Odolnost proti pokusům o zjištění robustnosti vůči fyzickým útokům.',
				right: false
			},
			{
				body: 'Vlastnost části systému umožňující reagovat na fyzický útok.',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených režimů podporuje IPsec:',
		answers: [
			{
				body: 'Překladový režim.',
				right: false
			},
			{
				body: 'Transportní režim.',
				right: true
			},
			{
				body: 'Tunelovací režim.',
				right: true
			},
			{
				body: 'Dynamický virtuální režim.',
				right: false
			}
		]
	},
	{
		name: 'Jaké jsou nevýhody autentizace hašovaným heslem?',
		answers: [
			{
				body: 'Příliš snadná transformace na zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí)',
				right: false
			},
			{
				body: 'Útok přehráním',
				right: true
			},
			{
				body: 'Možnost impersonace',
				right: false
			},
			{
				body: 'Náchylnost ke slovníkovému útoku',
				right: false
			}
		]
	},
	{
		name: 'PIN je',
		answers: [
			{
				body: 'Osobně sdílená informace',
				right: false
			},
			{
				body: 'Kombinace čísel a písmen (A-F) pro potřeby autentizace',
				right: false
			},
			{
				body: 'Veřejně známá informace',
				right: false
			},
			{
				body: 'Kombinace čísel pro potřeby autentizace',
				right: true
			}
		]
	},
	{
		name: 'K čemu slouží CRC (Cyclic redundancy check)',
		answers: [
			{
				body: 'K ověření autenticity dat',
				right: false
			},
			{
				body: 'Ke kompresi dat',
				right: false
			},
			{
				body: 'K zašifrování dat',
				right: false
			},
			{
				body: 'K detekci chyb při přenosu dat',
				right: true
			}
		]
	},
	{
		name: 'Co zajišťujeme použitím náhodných čísel?',
		answers: [
			{
				body: 'Odolnost proti uváznutí a stárnutí',
				right: false
			},
			{
				body: 'Aktuálnost',
				right: true
			},
			{
				body: 'Nezvratnost',
				right: false
			},
			{
				body: 'Stálost a stabilitu',
				right: false
			},
			{
				body: 'Čerstvost',
				right: true
			},
			{
				body: 'Jedinečnost',
				right: true
			}
		]
	},
	{
		name: 'Čeho lze dosáhnout zopakováním zero-knowledge protokolu (protokol s nulovým rozšíření znalostí)?',
		answers: [
			{
				body: 'Zvýšení bezpečnosti - zvýší se záruka, že nedojde k rozšíření žádných znalostí',
				right: false
			},
			{
				body: 'Zvýšení bezpečnosti - sníží se pravděpodobnost, že nepoctivý útočník se může úspěšně vydávat za jinou stranu',
				right: true
			},
			{
				body: 'Ničeho - ke spolehlivé autentizaci stačí 1 kolo protokolu',
				right: false
			},
			{
				body: 'Ničeho - nezvýší se záruka, že nedojde k rozšíření žádných znalostí',
				right: false
			}
		]
	},
	{
		name: 'Co je klonování elektronického pasu:',
		answers: [
			{
				body: 'Jedná se o neautorisované čtení pasu bez znalosti dat z MRZ',
				right: false
			},
			{
				body: 'Jedná se o neautorizovanou změnu dat v čipu, která je detekovatelná díky ověření digitálního podpisu.',
				right: false
			},
			{
				body: 'Jedná se o opakované využití náhodného identifikátoru čipu využívaného pro nízkoúrovňovou komunikaci pomocí ISO 14443',
				right: false
			},
			{
				body: 'Jedná se o kopii souborů z jednoho pasu do jiného',
				right: true
			}
		]
	},
	{
		name: 'Která z následujících tvrzení snímání geometrie ruky jsou pravdivá?',
		answers: [
			{
				body: 'Snímače snímají 2D snímky ruky shora, zespodu a ze stran (dohromady 4 snímky, u špičkových zařízení i 5-6).',
				right: false
			},
			{
				body: 'Snímače snímají 2D snímky ruky mikrokamerami ve fixačních kolících.',
				right: false
			},
			{
				body: 'Snímače snímají zjednodušený 3D náhled ruky.',
				right: true
			},
			{
				body: 'Tvar ruky je jedinečný (ve skupinách o tisících uživatelů).',
				right: false
			},
			{
				body: 'Tvar ruky není jedinečný (ve skupinách o tisících uživatelů).',
				right: true
			}
		]
	},
	{
		name: 'Který z následujících protokolů je součásti SSL/TLS protokolu?',
		answers: [
			{
				body: 'Kerberos protokol.',
				right: false
			},
			{
				body: 'Record Layer protokol.',
				right: true
			},
			{
				body: 'IPSec protokol.',
				right: false
			},
			{
				body: 'Handshake protokol.',
				right: true
			}
		]
	},
	{
		name: 'O RBAC (Role Based Access Control) je možné říci, že:',
		answers: [
			{
				body: 'jednotlivým uživatelům jsou přiřazovány odpovídající role',
				right: true
			},
			{
				body: 'jedná se o nadstavbu BAC použitého u elektronických pasů',
				right: false
			},
			{
				body: 'jde o zastaralý koncept ochrany soukromí',
				right: false
			},
			{
				body: 'místo rolí se v moderních operačních systémech používá stránkování',
				right: false
			},
			{
				body: 'nejde ani o volitelné, ani povinné řízení přístupu',
				right: true
			},
			{
				body: 'existuje standardizovaná metodika řazení uživatelů do jednotlivých rolí',
				right: false
			}
		]
	},
	{
		name: 'Integrita dat znamená',
		answers: [
			{
				body: 'Data v původní podobě lze obnovit i přesto, že byla modifikována',
				right: false
			},
			{
				body: 'Data nebyla neautorizovaně změněna pouze v průběhu přenosu nezabezpečeným kanálem',
				right: false
			},
			{
				body: 'Data nebyla neautorizovaně změněna',
				right: true
			},
			{
				body: 'Data nebyla autorizovaně předána',
				right: false
			}
		]
	},
	{
		name: 'Digitálně podepisujeme ',
		answers: [
			{
				body: 'Pouze haš podepisovaného dokumentu',
				right: true
			},
			{
				body: 'V případě malých dokumentů celou zprávu, v případě velkých dokumentů jejich haš',
				right: false
			},
			{
				body: 'Vždy přímo celý dokument',
				right: false
			}
		]
	},
	{
		name: 'Při používání digitálního podpisu používáme',
		answers: [
			{
				body: 'Digitální klíč',
				right: false
			},
			{
				body: 'Privátní a veřejný klíč',
				right: true
			},
			{
				body: 'Sdílené symetrické klíče mezi všemi komunikujícími partnery',
				right: false
			},
			{
				body: 'Digitální pečetě',
				right: false
			}
		]
	},
	{
		name: 'Jaký je vztah mezi chybovou analýzou a útoky na a přes API? ',
		answers: [
			{
				body: 'Chybová analýza s útoky na a přes API nijak nesouvisí.',
				right: true
			},
			{
				body: 'API mnohdy obsahuje četné chyby hodné důkladné analýzy.',
				right: false
			},
			{
				body: 'Chybová analýza je nezbytná součást každého útoku na a přes API.',
				right: false
			},
			{
				body: 'Každý útok na a přes API je nezbytnou součástí chybové analýzy.',
				right: false
			}
		]
	},
	{
		name: 'Český elektronický pas s aktivní autentizací:',
		answers: [
			{
				body: 'Lze naklonovat snadno, pokud známe data z MRZ',
				right: false
			},
			{
				body: 'Nelze snadno naklonovat (vyžaduje získání soukromého klíče pasu, který nelze z pasu vyčíst) a proto klonovaní českého pasu zatím nebylo veřejně předvedeno.',
				right: true
			},
			{
				body: 'Lze naklonovat jen pokud spolupracuje skutečný držitel pasu a zná svůj PIN',
				right: false
			}
		]
	},
	{
		name: 'Jak zajistíme integritu veřejného klíče',
		answers: [
			{
				body: 'Utajením soukromé části veřejného klíče',
				right: false
			},
			{
				body: 'Pomocí klíčované hašovací funkce',
				right: false
			},
			{
				body: 'Částečným utajením veřejného klíče',
				right: false
			},
			{
				body: 'Pomocí párového privátního klíče',
				right: false
			},
			{
				body: 'Pomocí certifikátu veřejného klíče',
				right: true
			}
		]
	},
	{
		name: 'Úspěšnost útoku hrubou silou se dá odhadnout podle vzorce',
		answers: [
			{
				body: '(velikost abecedy * délka hesla)/(počet odhadů za jednotku času)^(čas platnosti)',
				right: false
			},
			{
				body: '(čas platnosti * počet odhadů za jednotku času)/(velikost abecedy)^(délka hesla)',
				right: true
			},
			{
				body: '(délka hesla * počet odhadů za jednotku času)/(velikost abecedy)^(čas platnosti)',
				right: false
			},
			{
				body: '(počet odhadů za jednotku času * délka hesla)/(čas platnosti)^(velikost abecedy)',
				right: false
			}
		]
	},
	{
		name: 'Proč musíme povolit určitou variabilitu mezi registračním vzorkem a později získanými biometrickými daty?',
		answers: [
			{
				body: 'Z důvodu možné transplantace orgánu, aby i po ní bylo snímání možné.',
				right: false
			},
			{
				body: 'Protože buňky mají přirozenou tendenci obnovovat se a tudíž mohou vznikat malé odlišnosti.',
				right: false
			},
			{
				body: 'Protože biometrická data nejsou nikdy 100 % shodná.',
				right: true
			}
		]
	},
	{
		name: 'K čemu se používá CAPTCHA',
		answers: [
			{
				body: 'K odlišení uživatelů od robotů',
				right: true
			},
			{
				body: 'K odlišení chytrých robotů od robotů první generace',
				right: false
			},
			{
				body: 'K testu uživatelů, zda chtějí luštit text v obrázku a opisovat jej',
				right: false
			},
			{
				body: 'Je to dynamicky se měnící designový prvek www stránek',
				right: false
			}
		]
	},
	{
		name: 'Německý elektronický pas první generace bez aktivní autentizace: ',
		answers: [
			{
				body: 'Nelze snadno naklonovat (vyžaduje získání soukromého klíče pasu, který nelze z pasu vyčíst).',
				right: false
			},
			{
				body: 'Lze naklonovat jen pokud spolupracuje skutečný držitel pasu a zná svůj PIN',
				right: false
			},
			{
				body: 'Lze naklonovat snadno, pokud známe data z MRZ',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených možností jsou proveditelnými útoky při provedení autentizace prostřednictvím .rhosts',
		answers: [
			{
				body: 'Vrácení podvržené IP adresy po dotazu na DNS server.',
				right: true
			},
			{
				body: 'Útok hrubou silou.',
				right: false
			},
			{
				body: 'Uvedení nepředpokládaného loginu uživatele.',
				right: true
			},
			{
				body: 'IP spoofing.',
				right: true
			}
		]
	},
	{
		name: 'Pro dynamickou autentizaci dat (DDA) platí, že:',
		answers: [
			{
				body: 'Řeší problém padělání/duplikace karet',
				right: true
			},
			{
				body: 'Potvrzuje pravost pouze statických dat uložených v čipové kartě.',
				right: false
			},
			{
				body: 'Je prováděna platebním terminálem i čipem',
				right: true
			},
			{
				body: 'Potvrzuje pravost statických uložených v čipové kartě, ale i dynamických dat zaslaných čipem',
				right: false
			},
			{
				body: 'Je prováděna pouze čipovou kartou (terminál pouze zasílá data)',
				right: false
			},
			{
				body: 'Potvrzuje pravost statických dat uložených v čipové kartě, ale i dynamických dat zaslaných terminálem',
				right: true
			}
		]
	},
	{
		name: 'Zaručený elektronický podpis',
		answers: [
			{
				body: 'Autorizuje podepisující osobu ve vztahu k datové zprávě',
				right: false
			},
			{
				body: 'Umožňuje identifikaci podepisující osoby ve vztahu k datové zprávě',
				right: true
			},
			{
				body: 'Je spojen s dostatečnou finanční zárukou',
				right: false
			},
			{
				body: 'Umožňuje detekci změn ve zprávě, ke které je připojen',
				right: true
			},
			{
				body: 'Je jednoznačně spojen s podepisující osobou',
				right: true
			},
			{
				body: 'Je jednoznačně ověřitelný',
				right: true
			}
		]
	},
	{
		name: 'Které z následujících nejsou hašovací funkce',
		answers: [
			{
				body: 'RSA',
				right: true
			},
			{
				body: 'MD5',
				right: false
			},
			{
				body: 'SHA-1',
				right: false
			},
			{
				body: 'AES',
				right: true
			},
			{
				body: 'MD4',
				right: false
			},
			{
				body: 'RC4',
				right: true
			}
		]
	},
	{
		name: 'Které protokoly zaručují určitou míru jistoty o identitě jiné strany? ',
		answers: [
			{
				body: 'Protokoly pro ustavení klíče',
				right: false
			},
			{
				body: 'Autentizační protokoly',
				right: true
			},
			{
				body: 'Zero-knowledge protokoly (protokoly s nulovým rozšířením znalostí)',
				right: true
			},
			{
				body: 'Protokoly implementované v Kerberu',
				right: true
			}
		]
	},
	{
		name: 'Volitelné řízení přístupu ',
		answers: [
			{
				body: 'v určitých případech nezabrání neoprávněnému zveřejnění důvěrných dat',
				right: true
			},
			{
				body: 'zavádí striktní hierarchii členění důvěryhodnosti dat',
				right: false
			},
			{
				body: 'zavádí striktní hierarchii členění bezpečnosti dat',
				right: false
			}
		]
	},
	{
		name: 'Které časově konstantní parametry se používají v kryptografických protokolech?',
		answers: [
			{
				body: 'žádné z uvedených',
				right: true
			},
			{
				body: 'V omezeném čase monoliticky rostoucí sekvence (zabraňují tzv. borcení časové osy)',
				right: false
			},
			{
				body: 'XOR hodnotou "-1" pro modifikaci náhodné výzvy (tzv. keksík)',
				right: false
			},
			{
				body: 'Komplexní čísla s fixní imaginární i reálnou složkou',
				right: false
			},
			{
				body: 'Sekvenční číslo (jeho hodnota závisí na implementaci)',
				right: false
			},
			{
				body: 'Náhodná časová razítka (platná po určitou dobu - typicky několik desítek hodin)',
				right: false
			}
		]
	},
	{
		name: 'Co patří mezi bezpečnostní problémy používání bankovních karet pouze s magnetickým proužkem?',
		answers: [
			{
				body: 'Autentizační podpis je součástí karty.',
				right: false
			},
			{
				body: 'Malá odolnost proti chybové analýze.',
				right: false
			},
			{
				body: 'Relativně jednoduše se kopírují.',
				right: true
			},
			{
				body: 'Přítomný hologram se obtížně automatizovaně kontroluje.',
				right: true
			}
		]
	},
	{
		name: 'Mezi nevýhody ACL (seznam přístupových práv) patří: ',
		answers: [
			{
				body: 'je pomocí nich obtížné zjistit všechny subjekty, ke kterým má daný objekt přístup',
				right: false
			},
			{
				body: 'je pomocí nich obtížné zjistit všechny objekty, ke kterým má daný uživatel přístup',
				right: true
			},
			{
				body: 'je pomocí nich obtížné zjistit všechny subjekty, které mají k danému uživateli přístup',
				right: false
			},
			{
				body: 'malá režie a tvrdá vyjadřovací schopnost',
				right: false
			}
		]
	},
	{
		name: 'Které z uvedených možností autentizace klienta vůči serveru podporuje protokol ssh? ',
		answers: [
			{
				body: 'RSA autentizaci klienta.',
				right: true
			},
			{
				body: 'Využitím protokolu pro nulové rozšíření znalosti.',
				right: false
			},
			{
				body: 'Stroje uvedené v souborech .rhosts nebo hosts.equiv.',
				right: true
			},
			{
				body: 'Heslem uživatele bez autentizace serveru.',
				right: false
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení pro Encapsulated Security Payload (ESP) nejsou pravdivá?',
		answers: [
			{
				body: 'ESP nemá zajištěnu integritu a autenticitu dat, zajišťuje pouze důvěrnost dat.',
				right: true
			},
			{
				body: 'ESP zajišťuje integritu, autenticitu a důvěrnost dat.',
				right: false
			},
			{
				body: 'ESP zajišťuje obranu proti analýze šifrovaného provozu na úrovni síťové vrstvy.',
				right: true
			},
			{
				body: 'ESP zajišťuje integritu, autenticitu a důvěrnost dat, nezajišťuje však obranu proti útoku přehráním.',
				right: true
			}
		]
	},
	{
		name: 'Co znamená pojem elektronický podpis ve smyslu zákona o elektronickém podpisu?',
		answers: [
			{
				body: 'Takový pojem zákon neobsahuje',
				right: false
			},
			{
				body: 'To stejné, co digitální podpis',
				right: false
			},
			{
				body: 'Ručně psaný podpis',
				right: false
			},
			{
				body: 'Libovolná identifikující informace připojená ke zprávě',
				right: true
			}
		]
	},
	{
		name: 'Jaká jsou platná tvrzení pro aktivní autentizaci elektronických pasů? ',
		answers: [
			{
				body: 'Pro autentizaci je použit zero-knowledge protokol (Fiat-Shamir), který zároveň ověří, zda má pas k dispozici soukromý klíč',
				right: false
			},
			{
				body: 'Soukromý klíč je uložen v čipu, bez možnosti jeho přímého získání',
				right: true
			},
			{
				body: 'Veřejný klíč je uložen ve čtečce el. pasů a je digitálně podepsán',
				right: false
			},
			{
				body: 'Protokol výzva-odpověď lze použít pouze pokud čip neumožňuje efektivní implementaci zero-knowledge protokolu',
				right: false
			}
		]
	},
	{
		name: 'Jaká je nevýhoda digitálního podepisování prováděného až po zašifrování dat',
		answers: [
			{
				body: 'žádná, naopak výhodou je možnost snadné verifikace podpisu ještě před dešifrováním',
				right: false
			},
			{
				body: 'Výrazné urychlení kryptoanalýzy',
				right: false
			},
			{
				body: 'Možnost snadného odstranění digitálního podpisu',
				right: true
			},
			{
				body: 'žádná, naopak, výhodou je možnost několikanásobného podepsání zašifrovaných dat',
				right: false
			}
		]
	},
	{
		name: 'Silná bezkoliznost u hašovacích funkcí znamená',
		answers: [
			{
				body: 'V rozumném čase nejsme schopni nalézt x, y (x=y) tak, že h(x)!=h(y)',
				right: false
			},
			{
				body: 'V rozumném čase nejsme schopni nalézt x, y (x=y) tak, že h(x)=h(y)',
				right: false
			},
			{
				body: 'V rozumném čase nejsme schopni nalézt x, y (x!=y) tak, že h(x)=h(y)',
				right: true
			},
			{
				body: 'V rozumném čase nejsme schopni nalézt x, y (x!=y) tak, že h(x)!=h(y)',
				right: false
			}
		]
	},
	{
		name: 'Jaká technologie PINmailerů je bezpečnější při útocích prosvícením?',
		answers: [
			{
				body: 'Laserový tisk',
				right: false
			},
			{
				body: 'Průklepový tisk',
				right: true
			}
		]
	},
	{
		name: 'K prvkům hardwarové podpory řízení přístupu patří např.',
		answers: [
			{
				body: 'tzv. zero address: pokud se proces pokusí přistupovat k nulové adrese, což bývá známkou chyby, je násilně zastaven',
				right: false
			},
			{
				body: 'tzv. poštovní adresování: paměť je rozdělena na oblasti, aby OS mohl chránit paměť kontrolou znalosti tajného PSČ (tzv. ZIP code)',
				right: false
			},
			{
				body: 'zákaz přístupu všem procesům kromě OS do adres paměti nižších než jistá hranice (tzv. fence address)',
				right: true
			},
			{
				body: 'randomizace adres haldy (heap), na kterých se alokují dynamické proměnné běžících programů',
				right: false
			},
			{
				body: 'existence několika úrovní oprávnění (tzv. rings) definujících přístupnost různých registrů a strojových instrukcí programovému kódu',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených odpovědí jsou pravdivé?',
		answers: [
			{
				body: 'Cena výroby jednoho kusu tokenu klesá při výrobě mnohakusové série.',
				right: true
			},
			{
				body: 'Cena padělání typicky nezávisí na počtu padělaných kusů.',
				right: false
			},
			{
				body: 'Cena padělání jednoho kusu klesá při uplatnitelnosti mnohakusové série padělku.',
				right: true
			},
			{
				body: 'Relativní cena padělání se zvyšuje s každým dalším padělkem.',
				right: false
			}
		]
	},
	{
		name: 'Jaké jsou používané algoritmy při digitálním podepisování ',
		answers: [
			{
				body: 'CBC',
				right: false
			},
			{
				body: 'AES',
				right: false
			},
			{
				body: 'DSA',
				right: true
			},
			{
				body: 'RSA',
				right: true
			},
			{
				body: 'El-Gamal',
				right: true
			}
		]
	},
	{
		name: 'Při hašování hesel pro autentizaci uživatelů pomocí hesel:',
		answers: [
			{
				body: 'Ukládáme pouze haš hesla a rekonstrukce otevřené podoby není možná',
				right: true
			},
			{
				body: 'Ukládáme pouze haš hesla s možností rekonstrukce hesla v otevřené podobě',
				right: false
			},
			{
				body: 'Při ukládání můžeme využít techniky "solení"',
				right: true
			}
		]
	},
	{
		name: 'Mezi skryté kanály (covert channels) patří: ',
		answers: [
			{
				body: 'čítač vadných sektorů (Bad Blocks Counter, BBC)',
				right: false
			},
			{
				body: 'zaplnění disku',
				right: true
			},
			{
				body: 'kanál částečně autorizovaného přenosu dat sběrnice MAC',
				right: false
			},
			{
				body: 'aktuální zátěž procesoru',
				right: true
			},
			{
				body: 'aktuální uzel v síti (Current Network Node, CNN)',
				right: false
			}
		]
	},
	{
		name: 'Chybovost biometrických systémů závisí na:',
		answers: [
			{
				body: 'Schopnosti a motivaci uživatelů.',
				right: true
			},
			{
				body: 'Nastavení systému.',
				right: true
			},
			{
				body: 'Typu snímače.',
				right: true
			},
			{
				body: 'Okolním prostředí.',
				right: true
			}
		]
	},
	{
		name: 'Útok na hesla může být',
		answers: [
			{
				body: 'Slovníkový',
				right: true
			},
			{
				body: 'Pomocí sociálního inženýrství',
				right: true
			},
			{
				body: 'Matrixovou metodou',
				right: false
			},
			{
				body: 'Hrubou silou',
				right: true
			},
			{
				body: 'Na základě určitých znalostí o uživateli',
				right: true
			}
		]
	},
	{
		name: 'Protokoly výzva-odpověď mohou být založeny na: ',
		answers: [
			{
				body: 'klíčované hašovací funkci',
				right: true
			},
			{
				body: 'symetrickém šifrování',
				right: true
			},
			{
				body: 'digitálním podpisu',
				right: true
			},
			{
				body: 'MAC kódu, resp. funkci',
				right: true
			}
		]
	},
	{
		name: 'Základní techniky zajištění soukromí u RFID tagů jsou: ',
		answers: [
			{
				body: 'Selektivní blokování tagů',
				right: true
			},
			{
				body: 'Deaktivace či rušení RFID tagu',
				right: true
			},
			{
				body: 'Kryptografické metody pro zajištění soukromí pomocí soukromých klíčů asymetrické kryptografie (s potenciální možností využití hybridního šifrování)',
				right: false
			},
			{
				body: 'Využití protokolů zajišťujících anonymitu jednotlivých stran',
				right: false
			},
			{
				body: 'Důsledné utajení existence RFID tagu',
				right: false
			},
			{
				body: 'Změna jedinečného identifikátoru',
				right: true
			}
		]
	},
	{
		name: 'Vhodná tajná informace pro autentizaci je',
		answers: [
			{
				body: 'Rodné příjmení matky',
				right: false
			},
			{
				body: 'Tel. číslo, pokud není uvedeno ve Zlatých stránkách',
				right: false
			},
			{
				body: 'Heslo',
				right: true
			},
			{
				body: 'PIN',
				right: true
			},
			{
				body: 'Fráze (passphrase)',
				right: true
			}
		]
	},
	{
		name: 'Mezi reálně používané biometrické technologie patří',
		answers: [
			{
				body: 'dynamika pohybu hlavy',
				right: false
			},
			{
				body: 'otisk prstu',
				right: true
			},
			{
				body: 'srovnání obličeje',
				right: true
			},
			{
				body: 'geometrie (tvaru) nohy',
				right: false
			},
			{
				body: 'vzor oční panenky',
				right: false
			}
		]
	},
	{
		name: 'Mezi problémy při správě víceúrovňových systémů (MLS) typicky patří:',
		answers: [
			{
				body: 'nestabilita aplikací využívajících MLS',
				right: false
			},
			{
				body: 'nevhodné chování procesů',
				right: false
			},
			{
				body: 'náročná administrace',
				right: true
			},
			{
				body: 'neexistující nástroje pro administraci',
				right: false
			},
			{
				body: 'propojování jednotlivých MLS systémů',
				right: true
			},
			{
				body: 'obtížná/nejednoznačná klasifikace dat',
				right: true
			}
		]
	},
	{
		name: 'Co nezajišťuje protokol ssh?',
		answers: [
			{
				body: 'Autentizaci uživatele.',
				right: false
			},
			{
				body: 'Ochranu proti analýze provozu.',
				right: true
			},
			{
				body: 'Ochranu proti distribuovanému odmítnutí služby.',
				right: true
			},
			{
				body: 'Autentizaci serveru.',
				right: false
			}
		]
	},
	{
		name: 'Přístupová hesla můžeme rozlišit na',
		answers: [
			{
				body: 'Jednorázová',
				right: true
			},
			{
				body: 'Veřejná',
				right: false
			},
			{
				body: 'Původně neveřejná',
				right: false
			},
			{
				body: 'Skupinová',
				right: true
			},
			{
				body: 'Unikátní pro danou osobu',
				right: true
			},
			{
				body: 'Jednocestná',
				right: false
			}
		]
	},
	{
		name: 'Dynamická autentizace dat (DDA) se liší oproti statické autentizaci dat (SDA) tím, že: ',
		answers: [
			{
				body: 'vyžaduje čip s dostatečnou paměťovou kapacitou, ale nevyžaduje koprocesor',
				right: false
			},
			{
				body: 'vyžaduje nový unikátní pár RSA klíčů',
				right: true
			},
			{
				body: 'vyžaduje nový unikátní pár AES klíčů',
				right: false
			},
			{
				body: 'vyžaduje, aby byl veřejný klíč podepsán a uložen společně se statickými aplikačními daty',
				right: true
			},
			{
				body: 'vyžaduje bezpečně uložený certifikát umožňující kartě ověřit pravost platebního terminálu',
				right: false
			},
			{
				body: 'vyžaduje čip s kryptografickým koprocesorem',
				right: true
			}
		]
	},
	{
		name: 'Současné čipové karty:',
		answers: [
			{
				body: 'Umožňují pouze provádění kryptografických operací asymetrické kryptografie.',
				right: false
			},
			{
				body: 'Neumožňují provádění kryptografických operací.',
				right: false
			},
			{
				body: 'Umožňují provádění kryptografických operací symetrické a asymetrické kryptografie s využitím koprocesoru.',
				right: true
			},
			{
				body: 'Umožňují pouze provádění kryptografických operací symetrické kryptografie.',
				right: false
			}
		]
	},
	{
		name: 'Fyzickou bezpečností se u čipových karet myslí: ',
		answers: [
			{
				body: 'Ochrana proti hloubkové odběrové analýze na úrovni procesoru.',
				right: false
			},
			{
				body: 'Ochrana proti fyzickému zkoušení PINu hrubou silou.',
				right: false
			},
			{
				body: 'Fyzická překážka kolem čipu karty ztěžující neautorizovaný přístup.',
				right: true
			},
			{
				body: 'Odolnost proti útokům vyžadujícím fyzický přístup ke kartě.',
				right: true
			}
		]
	},
	{
		name: 'Mezi základní nedostatky při snímání obličeje nepatří',
		answers: [
			{
				body: 'nasazené kontaktní čočky.',
				right: true
			},
			{
				body: 'pestré a barevné pozadí.',
				right: false
			},
			{
				body: 'nasazená čepice.',
				right: false
			},
			{
				body: 'zavřené oči.',
				right: false
			}
		]
	},
	{
		name: "Jaké vlastnosti má Shamirův protokol bez klíčů (Shamir's no-key protocol) ",
		answers: [
			{
				body: 'Nevyžaduje žádné ustavení sdílených klíčů',
				right: true
			},
			{
				body: 'Vyžaduje komutativní šifrovací algoritmus',
				right: true
			},
			{
				body: 'Funguje obzvláště dobře (a prokazatelně bezpečně) jen při použití One-Time Pad',
				right: false
			},
			{
				body: 'Prokazuje, že P!=NP',
				right: false
			},
			{
				body: 'Umožňuje vzájemnou autentizaci',
				right: false
			}
		]
	},
	{
		name: 'Co je to heslo založené na frázi?',
		answers: [
			{
				body: 'Heslo, které obsahuje pouze malá písmena',
				right: false
			},
			{
				body: 'Heslo založené na veřejně známé frázi, aby si jej všichni snadno zapamatovali',
				right: false
			},
			{
				body: 'Heslo, které lze jednoduše přečíst',
				right: false
			},
			{
				body: 'Pomůcka pro zapamatování složitého hesla',
				right: true
			}
		]
	},
	{
		name: 'Jaké vlastnosti mají magneto-optické čipové karty?',
		answers: [
			{
				body: 'Umožňují snímání čárových kódů zobrazovaných na monitoru při vstupu do internetového bankovnictví a jejich okamžité zpracování v čipu.',
				right: false
			},
			{
				body: 'žádná z výše uvedených odpovědí.',
				right: true
			},
			{
				body: 'Poskytují magneto-optické rozhraní pro vysokorychlostní a prokazatelně bezpečný přenos dat.',
				right: false
			},
			{
				body: 'Neumožňují provádění kryptografických operací i přesto, že obsahují sofistikovanější magneto-optický proužek. Každá z dvou komunikujících stran má svůj symetrický klíč.',
				right: false
			}
		]
	},
	{
		name: 'Kolik zpráv se vymění ve Shamirově protokolu bez klíčů, aby obě strany sdílely stejný klíč?',
		answers: [
			{
				body: '2',
				right: false
			},
			{
				body: '4',
				right: false
			},
			{
				body: '3',
				right: true
			},
			{
				body: 'žádná z těchto odpovědi není správná',
				right: false
			}
		]
	},
	{
		name: 'Útok na čipové karty přes aplikační rozhraní (API) je založen na:',
		answers: [
			{
				body: 'Využití chyby v návrhu rozhraní.',
				right: true
			},
			{
				body: 'Nezamýšleném dopadu zpracování útočníkem zaslaných specifických vstupních dat.',
				right: true
			},
			{
				body: 'Nedostupnosti aplikačního rozhraní vnitřnímu prostředí karty.',
				right: false
			},
			{
				body: 'Využití indukce chyb do zpracování dat zaslaných přes aplikační rozhraní.',
				right: false
			}
		]
	},
	{
		name: 'Které politiky řízení přístupu existují a používají se:',
		answers: [
			{
				body: 'asystematické řízení přístupu',
				right: false
			},
			{
				body: 'volitelné řízení přístupu',
				right: true
			},
			{
				body: 'povinné řízení přístupu',
				right: true
			},
			{
				body: 'biometrické řízení provozu',
				right: false
			},
			{
				body: 'skryté řízení přístupu',
				right: false
			}
		]
	},
	{
		name: 'Ukládání hesel lze realizovat',
		answers: [
			{
				body: 'Hašovaně',
				right: true
			},
			{
				body: 'Impulzně',
				right: false
			},
			{
				body: 'V otevřené podobě',
				right: true
			},
			{
				body: 'Šifrovaně',
				right: true
			},
			{
				body: 'Hlasovaně',
				right: false
			}
		]
	},
	{
		name: 'Jaká je správná sekvence operací při ověřování PINu odolná proti přerušení napájení?',
		answers: [
			{
				body: 'Zvýšení čítače, test čítače pokusů větší než 0, ověření korektnosti PINu, zvýšení čítače při dobrém PINu.',
				right: false
			},
			{
				body: 'Test čítače pokusů větší než 0, snížení čítače, ověření korektnosti PINu, zvýšení čítače při dobrém PINu.',
				right: true
			},
			{
				body: 'Test čítače pokusů větší než 0, zvýšení čítače, ověření korektnosti PINu, zvýšení čítače při dobrém PINu.',
				right: false
			},
			{
				body: 'Test čítače pokusů větší než 0, ověření korektnosti PINu, snížení čítače při špatném PINu.',
				right: false
			}
		]
	},
	{
		name: 'Co je to hašovací funkce?',
		answers: [
			{
				body: 'Funkce, která mapuje libovolně velký vstup na výstup s délkou 128, 192, 256 nebo 512 bitů',
				right: false
			},
			{
				body: 'Funkce, která mapuje libovolně velký vstup na výstup fixní délky a není prostá',
				right: true
			},
			{
				body: 'Funkce, která mapuje libovolně velký vstup na výstup fixní délky a je prostá',
				right: false
			},
			{
				body: 'Funkce, která mapuje vstup fixní délky na výstup variabilní délky (podle entropie vstupu)',
				right: false
			},
			{
				body: 'Šifrovací funkce se schopností deprese vstupních dat',
				right: false
			}
		]
	},
	{
		name: 'Chybové hlášení o změně integritního součtu veřejného klíče serveru u SSH může být způsobeno',
		answers: [
			{
				body: 'Změnou dlouhodobého klíče serveru jeho administrátorem',
				right: true
			},
			{
				body: 'Chybějícím záznamem veřejného klíče v souboru známých serverů',
				right: false
			},
			{
				body: 'Podvržením serveru útočníkovým strojem',
				right: true
			},
			{
				body: 'Změnou souboru s veřejným klíčem serveru na uživatelově PC',
				right: true
			}
		]
	},
	{
		name: 'Které z uvedených možností zajišťuje protokol IPsec?',
		answers: [
			{
				body: 'Nepopiratelnost přijetí dat.',
				right: false
			},
			{
				body: 'Důvěrnost dat, ochrana proti útoku přehráním.',
				right: true
			},
			{
				body: 'Autentizace a integrita původu dat.',
				right: true
			},
			{
				body: 'Podporu správy klíčů.',
				right: true
			}
		]
	},
	{
		name: 'Testování živosti obvykle nemá následující dopady',
		answers: [
			{
				body: 'nepříjemné pocity brnění v oblasti testovaného vzorku.',
				right: true
			},
			{
				body: 'zvýšený počet nesprávných odmítnutí.',
				right: false
			},
			{
				body: 'zvýšení ceny zařízení.',
				right: false
			},
			{
				body: 'vyšší náklady na vývoj a výrobu.',
				right: false
			}
		]
	},
	{
		name: 'Při autentizaci tajnou informací je nutné dodržet',
		answers: [
			{
				body: 'Tajnou informaci musí vědět jen oprávněný uživatel',
				right: true
			},
			{
				body: 'Tajnou informaci musíme sdělit administrátorovi pro případně admin. zásahy v našem systému',
				right: false
			},
			{
				body: 'Z tajné informace se musí nejprve vytvořit inicializační vektor',
				right: false
			},
			{
				body: 'Prostor, ze kterého vybíráme hodnotu tajné informace musí být rozsáhlý',
				right: true
			}
		]
	},
	{
		name: 'Která z uvedených tvrzení o řízení přístupu k datům na čipových kartách jsou pravdivá? ',
		answers: [
			{
				body: 'Data jsou uchována na magnetickém proužku a před použitím v čipu kontrolována.',
				right: false
			},
			{
				body: 'Každý soubor má přiřazenu hlavičku s přístupovými právy.',
				right: true
			},
			{
				body: 'Data na kartě nemohou být po zápisu nikdy čtena ani měněna.',
				right: false
			},
			{
				body: 'Založeno především na řízení přístupu k souborům.',
				right: true
			}
		]
	},
	{
		name: 'Co je to odpověď na narušení?',
		answers: [
			{
				body: 'žádná z výše uvedených odpovědí.',
				right: false
			},
			{
				body: 'Služba internetového bankovnictví umožňující automaticky detekovat a upozornit na aktivní nebezpečný software v počítači.',
				right: false
			},
			{
				body: 'Reakce nechráněné části systému na potencionální útok.',
				right: false
			},
			{
				body: 'Reakce chráněné části systému na probíhající pokus o útok.',
				right: true
			}
		]
	},
	{
		name: 'Z hlediska lidské paměti je vhodné volit',
		answers: [
			{
				body: 'Složitá, ale snadno zapamatovatelná hesla',
				right: true
			},
			{
				body: 'Jednoduchá a jednoduše zapamatovatelná hesla',
				right: true
			},
			{
				body: 'Obtížně zapamatovatelná hesla a každý měsíc nutit uživatele ke změně',
				right: false
			},
			{
				body: 'Hesla založená na frázích',
				right: true
			}
		]
	},
	{
		name: 'Pro urychlení počítačových systémů využívajících digitální podpis',
		answers: [
			{
				body: 'u čipových karet bývají použity kryptografické koprocesory ',
				right: true
			},
			{
				body: 'obvykle využíváme hašovací funkce pro reprezentaci podepisovaných dat',
				right: true
			},
			{
				body: 'lze využít prokazatelnou odpovědnost metodou Monte Carlo',
				right: false
			},
			{
				body: 'se často používá podchlazování ochranných komponent čipových karet',
				right: false
			},
			{
				body: 'používají obě strany identický privátní klíč',
				right: false
			}
		]
	},
	{
		name: 'Pro autentizaci v sítích GSM se používá:',
		answers: [
			{
				body: 'asymetrická kryptografie s protokolem RAND',
				right: false
			},
			{
				body: 'dvoufaktorová autentizace – SIM a (nepovinný) PIN',
				right: true
			},
			{
				body: 'jedno nebo dvoufaktorová autentizace podle nastavení PINu',
				right: true
			},
			{
				body: 'Shamirův bezklíčový protokol',
				right: false
			},
			{
				body: 'zero-knowledge protokol Fiat-Feige se čtyřmi faktory',
				right: false
			}
		]
	},
	{
		name: 'Úspěšnost hádání hesel hrubou silou:',
		answers: [
			{
				body: 'klesá s velikostí použité abecedy',
				right: true
			},
			{
				body: 'záleží na zapamatovatelnosti a struktuře hesla',
				right: false
			},
			{
				body: 'roste s dobou platnosti hesla',
				right: true
			},
			{
				body: 'ovlivnil výzkum Zvirana & Hagy',
				right: false
			},
			{
				body: 'klesá s délkou hesla',
				right: true
			},
			{
				body: 'klesá s rostoucí rychlostí útočníkova počítače',
				right: false
			}
		]
	},
	{
		name: 'Offline verifikace karetní transakce:',
		answers: [
			{
				body: 'je zakalkulovaná v systému řízení rizik a provádí se pro snížení transakčních nákladů',
				right: true
			},
			{
				body: 'se dnes již v bankomatech neprovádí',
				right: true
			},
			{
				body: 'se za určitých podmínek provádí v PINpadu',
				right: true
			},
			{
				body: 'vyžaduje přiblížení pasu s čipem podporujícím DDA k PINpadu',
				right: false
			},
			{
				body: 'se používá jen v zemích Eurozóny (země platící eurem)',
				right: false
			},
			{
				body: 'je povolena jen při biometrické autentizaci uživatele',
				right: false
			}
		]
	},
	{
		name: 'Terminologický nesmysl je:',
		answers: [
			{
				body: 'zajištění integrity dat pomocí hašovací funkce',
				right: false
			},
			{
				body: 'kryptografické hašovací funkce mají být rychlé a jednosměrné',
				right: false
			},
			{
				body: 'vodotisk hesla /etc/shadow',
				right: true
			},
			{
				body: 'zaručený elektronický podpis založený na kvalifikovaném certifikátu',
				right: false
			},
			{
				body: 'kryptace sdíleného souboru s ufopornem',
				right: true
			},
			{
				body: 'kryptoanalýza zakryptovaného souboru',
				right: true
			}
		]
	},
	{
		name: 'Pro bezpečnostní úrovně modelu Bell-LaPadula L1=(TS,{obrana,ekonomika}) a L2=(S,{obrana}) platí:',
		answers: [
			{
				body: 'L1 a L2 jsou neporovnatelné',
				right: false
			},
			{
				body: 'L1 dominuje L2',
				right: true
			},
			{
				body: 'L2 dominuje L1',
				right: false
			},
			{
				body: 'L1 a L2 jsou neporovnatelné, pokud neplatí exkluzivita *-vlastnosti',
				right: false
			}
		]
	},
	{
		name: 'Token s generátorem jednorázových hesel lze považovat za mechanismus dvoufaktorové autentizace:',
		answers: [
			{
				body: 'jen pokud se jím vygenerované heslo dá použít právě ve dvou autentizačních systémech',
				right: false
			},
			{
				body: 'jen pokud se heslo generuje na základě dvou faktorizačních problémů',
				right: false
			},
			{
				body: 'pokud se uživatel musí autentizovat vůči tokenu před jeho použitím svým heslem',
				right: true
			},
			{
				body: 'pokud se uživatel musí autentizovat vůči tokenu před jeho použitím svým PINem',
				right: true
			}
		]
	},
	{
		name: 'Hybridní čipová karta',
		answers: [
			{
				body: 'pracuje se dvěma různými čipy',
				right: true
			},
			{
				body: 'je nyní výhradní technologií pro bankovní karetní operace',
				right: false
			},
			{
				body: 'poskytuje možnost komunikace přes kontaktní i bezkontaktní rozhraní',
				right: true
			},
			{
				body: 'je založena na využití kombinace asymetrické a symetrické kryptografie',
				right: false
			}
		]
	},
	{
		name: 'Dodatečná autorizace citlivých/významných operací se provádí obvykle:',
		answers: [
			{
				body: 'autorizací této operace klíčem z kořenového certifikátu',
				right: false
			},
			{
				body: 'reputačním systémem bankovního dozorce',
				right: false
			},
			{
				body: 'odděleným (separátním) kanálem',
				right: true
			},
			{
				body: 's použitím dalšího autorizačního kroku',
				right: true
			},
			{
				body: 'SSL certifikátem s tzv. extended validation (EV)',
				right: false
			}
		]
	},
	{
		name: 'Která z následujících tvrzení o čipových kartách jsou pravdivá?',
		answers: [
			{
				body: 'Bezkontaktní čipová karta potřebuje anténu pro komunikaci i získávání energie.',
				right: true
			},
			{
				body: 'Komunikaci mezi čtečkou a bezkontaktní čipovou kartou lze odposlechnout.',
				right: true
			},
			{
				body: 'Kontaktní čipová karta má vlastní zdroj energie a komunikuje se čtečkou přímo.',
				right: false
			},
			{
				body: 'U bezkontaktní čipové karty je zajištěno autorizované smazání dat při výpadku napájecího napětí.',
				right: false
			}
		]
	},
	{
		name: 'PIN je',
		answers: [
			{
				body: 's obvodním bankéřem sdílená informace',
				right: false
			},
			{
				body: 'nejčastěji volen v hodnotách 1234, 0000, 0007 nebo 1111',
				right: true
			},
			{
				body: 'doplňkovým bezpečnostním mechanismem pro operace s bankomatem',
				right: true
			},
			{
				body: 'nastaven bankou jako haš hesla internetového bankovnictví',
				right: false
			}
		]
	},
	{
		name: 'Mezi techniky pro zajištění soukromí v autentizačních systémech patří:',
		answers: [
			{
				body: 'maskování prvních 5 bajtů strojově čitelné zóny elektronických pasů',
				right: false
			},
			{
				body: 'pravidelná změna identifikátoru čipu',
				right: true
			},
			{
				body: 'uložení podepsaných hašů do EF.SO_D elektronických pasů',
				right: false
			},
			{
				body: 'pasivní rušení (Faradayova klec) čipu',
				right: true
			}
		]
	},
	{
		name: 'Úspěšnost hádání hesel hrubou silou:',
		answers: [
			{
				body: 'klesá s dobou platnosti hesla',
				right: false
			},
			{
				body: 'roste s velikostí použité abecedy',
				right: false
			},
			{
				body: 'ovlivnil výzkum Needhama a Schroedera (2008)',
				right: false
			},
			{
				body: 'lze u online útoků omezit procedurálně',
				right: true
			},
			{
				body: 'klesá s délkou hesla',
				right: true
			},
			{
				body: 'roste s rostoucí rychlostí útočníkova počítače',
				right: true
			}
		]
	}
];

export default questions;
