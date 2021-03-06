const questions = [
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
				body: 'Žádná z výše uvedených odpovědí.',
				right: true
			},
			{
				body: 'Metrika sloužící k určení a vyhodnocení efektivnosti semi-invazivních útoků.',
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
			}
		]
	},
	{
		name: 'Jaká je nevýhoda digitálního podepisování prováděného až po zašifrování dat',
		answers: [
			{
				body: 'Žádná, naopak výhodou je možnost snadné verifikace podpisu ještě před dešifrováním',
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
				body: 'Žádná, naopak, výhodou je možnost několikanásobného podepsání zašifrovaných dat',
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
				body: 'Fyzická překážka kolem čipu karty ztěžující neutorizovaný přístup.',
				right: false
			},
			{
				body: 'Odolnost proti útokům vyžadujícím fyzický přístup ke kartě.',
				right: true
			}
		]
	},
	{
		name: 'Aktualizace klíče se vzájemnou autentizací protokolem AKEP2 (Authenticated Key Exchange',
		answers: [
			{
				body: 'Protocol 2) je založena na:',
				right: false
			},
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
				body: 'Bezklíčových kryptografických hašovacích funkcích',
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
		name: 'Které z uvedených kategorií čipových karet podle technologie komunikace rozlišujeme?',
		answers: [
			{
				body: 'Hybridní karty.',
				right: false
			},
			{
				body: 'Bezkontaktní karty.',
				right: true
			},
			{
				body: 'Konktaktní karty.',
				right: true
			},
			{
				body: 'Polymorfní karty.',
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
		name: 'k čemu slouží MAC (Message authentication code)',
		answers: [
			{
				body: 'K zajištění důvěrnosti',
				right: true
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
				body: 'Ani jedno z uvedených tvrzení neplat',
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
				body: 'Většinou nejsou jednoduše -  kopírovatelné.',
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
		name: 'Která z uvedených tvrzení o uživatelově PINu jsou pravdivá (při standardním nastavení karty)?',
		answers: [
			{
				body: 'Při změně nezablokovaného PINu je třeba zadat starý i nový uživatelský  PIN.',
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
		name: 'K čemu slouží soubor .rhosts?',
		answers: [
			{
				body: 'K nastavení adres počítačů s povoleným přihlášením bez další autentizace',
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
				right: false
			},
			{
				body: 'Relativní cena padělání se zvyšuje s každým dalším padělkem.',
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
				body: 'kolením uživatelů',
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
		name: 'Chybové hlášení o změně integritního součtu veřejného klíče serveru u SSH může být ',
		answers: [
			{
				body: 'způsobeno',
				right: false
			},
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
				body: 'Napořadí operací nezáleží',
				right: false
			},
			{
				body: 'Podpis, šifrování',
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
			}
		]
	},
	{
		name: ' K čemu se používá CAPTCHA',
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
				right: true
			},
			{
				body: 'Náhodná čísla',
				right: true
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
		name: 'Digitálně podepisujeme ',
		answers: [
			{
				body: 'Pouze haš podepisovaného dokumentu',
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
		name: 'Jaký je vztah mezi chybovou analýzou a útoky na a přes API? ',
		answers: [
			{
				body: 'Chybová analýza s útoky na a přes API nijak nesouvisí.',
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
		name: 'Digitální podpis může vytvořit',
		answers: [
			{
				body: 'Pouze osoba vlastnící sdílený klíč',
				right: false
			},
			{
				body: 'Pouze osoba vlastnící soukromý klíč',
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
				body: 'Podpis vytořený pomocí kryptografických prostředků',
				right: true
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
				right: false
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
		name: 'Jaké vlastnosti má Shamirův protokol bez klíčů (Shamir’s no-key protocol) ',
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
		name: 'Co patří mezi bezpečnostní problémy používání bankovních karet s čipem?',
		answers: [
			{
				body: 'Možnost odpozorování PINu na frekventovaných místech.',
				right: true
			},
			{
				body: 'Špatná průkaznost nelegitimní autorizace platby pomocí PINu.',
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
			}
		]
	}
];

export default questions;
