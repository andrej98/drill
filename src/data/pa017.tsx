const questions = [
	{
		name: 'Který SW patří mezi generické produkty:',
		answers: [
			{
				body: 'MS Word.',
				right: true
			},
			{
				body: 'IS.MUNI.',
				right: false
			},
			{
				body: 'MS Windows.',
				right: true
			}
		]
	},
	{
		name: 'Který životní cyklus je vhodný pro rozsáhlé IS:',
		answers: [
			{
				body: 'Vodopád.',
				right: false
			},
			{
				body: 'Prototypování.',
				right: false
			},
			{
				body: 'Přírůstkový.',
				right: true
			}
		]
	},
	{
		name: 'Plán testování by měl vznikat ve fázi:',
		answers: [
			{
				body: 'Analýza.',
				right: false
			},
			{
				body: 'Návrh.',
				right: true
			},
			{
				body: 'Psaní kódu.',
				right: false
			}
		]
	},
	{
		name: 'Mezi životní cykly vývoje dle obrysové (požiadavky nie sú striktne dané, iba cca 50% - 70% presne dané) specifikace patří:',
		answers: [
			{
				body: 'Vodopád.',
				right: false
			},
			{
				body: 'Přírůstkový.',
				right: true
			},
			{
				body: 'Výzkumník.',
				right: false
			}
		]
	},
	{
		name: 'Spirálový životní cyklus je:',
		answers: [
			{
				body: 'Iterativní.',
				right: true
			},
			{
				body: 'Inkrementální.',
				right: true
			},
			{
				body: 'Lineární.',
				right: false
			}
		]
	},
	{
		name: 'Z pohledu složení aplikace obvykle platí, že:',
		answers: [
			{
				body: 'Část kódu řešící uživatelské vstupy je větší než část řešící výstupy.',
				right: true
			},
			{
				body: 'Část kódu řešící uživatelské výstupy je větší než část řešící vstupy.',
				right: false
			},
			{
				body: 'Obě části jsou přibližně stejně velké.',
				right: false
			}
		]
	},
	{
		name: 'Největší pracnost během údržby SW obvykle představují:',
		answers: [
			{
				body: 'Havarijní zásahy a opravy.',
				right: false
			},
			{
				body: 'Dodatečné úpravy vyžádané uživateli.',
				right: true
			},
			{
				body: 'Pravidelné kontroly a rutinní opravy chyb.',
				right: false
			}
		]
	},
	{
		name: 'Cena údržby SW v součtu za celé období jeho provozu:',
		answers: [
			{
				body: 'je řádově nižší, než je cena za pořízení SW.',
				right: false
			},
			{
				body: 'může být vyšší, než je cena za pořízení SW.',
				right: true
			},
			{
				body: 'závisí na délce doby provozu SW.',
				right: true
			}
		]
	},
	{
		name: 'Vyberte správné tvrzení:',
		answers: [
			{
				body: 'Čím později v životním cyklu detekujeme chybu, tím nákladnější bude její oprava.',
				right: true
			},
			{
				body: 'Čím později v životním cyklu detekujeme chybu, tím levnější bude její oprava.',
				right: false
			},
			{
				body: 'To, kdy v životním cyklu detekujeme chybu, nemá vliv na cenu její opravy.',
				right: false
			}
		]
	},
	{
		name: 'Lehmanův Zákon trvalé proměny říká, že:',
		answers: [
			{
				body: 'Systém používaný v reálném prostředí se neustále mění, vždy je však levnější systém restrukturalizovat, než ho nahradit zcela novou verzí.',
				right: false
			},
			{
				body: 'Systém používaný v reálném prostředí se neustále mění, dokud není levnější systém restrukturalizovat, nebo nahradit zcela novou verzí.',
				right: true
			},
			{
				body: 'Systém používaný v reálném prostředí se obvykle nemění, proto obvykle není třeba systém restrukturalizovat, nebo nahradit zcela novou verzí.',
				right: false
			}
		]
	},
	{
		name: 'Lehmanův Zákon rostoucí složitosti říká, že:',
		answers: [
			{
				body: 'Při evolučních změnách je program stále stejně strukturovaný a nevzrůstá jeho vnitřní složitost. Odstranění narůstající složitosti nevyžaduje dodatečné úsilí.',
				right: false
			},
			{
				body: 'Při evolučních změnách je program stále méně strukturovaný a vzrůstá jeho vnitřní složitost. Odstranění narůstající složitosti však nevyžaduje dodatečné úsilí.',
				right: false
			},
			{
				body: 'Při evolučních změnách je program stále méně strukturovaný a vzrůstá jeho vnitřní složitost. Odstranění narůstající složitosti vyžaduje dodatečné úsilí.',
				right: true
			}
		]
	},
	{
		name: 'Lehmanův Zákon vývoje programu říká, že:',
		answers: [
			{
				body: 'Rychlost změn globálních atributů systému lze statisticky sledovat.',
				right: true
			},
			{
				body: 'Rychlost změn globálních atributů systému lze předvídat.',
				right: true
			},
			{
				body: 'Rychlost změn globálních atributů systému je náhodná.',
				right: false
			}
		]
	},
	{
		name: 'Programátorská produktivita s množstvím přibývajícího kódu:',
		answers: [
			{
				body: 'roste.',
				right: false
			},
			{
				body: 'klesá.',
				right: true
			},
			{
				body: 'zůstává stejná.',
				right: false
			}
		]
	},
	{
		name: 'Metodika Scrum je vhodná v situaci, kdy:',
		answers: [
			{
				body: 'Jsou na začátku projektu jasně stanovené požadavky na SW',
				right: false
			},
			{
				body: 'Předpokládá se agilní přístup',
				right: true
			},
			{
				body: 'Předpokládá se minimální zapojení zákazníka v průběhu realizace projektu',
				right: false
			}
		]
	},
	{
		name: 'Metodika SCRUM je:',
		answers: [
			{
				body: 'Inkrementální',
				right: true
			},
			{
				body: 'Iterativní',
				right: true
			},
			{
				body: 'Agilní',
				right: true
			}
		]
	},
	{
		name: 'Funkční požadavky na systém jsou v zachyceny formou:',
		answers: [
			{
				body: 'user stories',
				right: true
			},
			{
				body: 'případů užití',
				right: false
			},
			{
				body: 'byznys procesů',
				right: false
			}
		]
	},
	{
		name: 'Sprintem se metodice SCRUM rozumí:',
		answers: [
			{
				body: 'jedna iterace',
				right: true
			},
			{
				body: 'krátká schůzka týmu pořádaná jedenkrát denně',
				right: false
			},
			{
				body: 'balíček požadavků, které mají být implementovány',
				right: false
			}
		]
	},
	{
		name: 'Produkct backlog obsahuje:',
		answers: [
			{
				body: 'Požadavky na celý systém',
				right: true
			},
			{
				body: 'Požadavky pro jedenu konkrétní iteraci',
				right: false
			},
			{
				body: 'Již realizované požadavky',
				right: false
			}
		]
	},
	{
		name: 'Fáze SCRUM, ve které dochází k psaní kódu je:',
		answers: [
			{
				body: 'tzv. předehra',
				right: false
			},
			{
				body: 'tzv. hra',
				right: true
			},
			{
				body: 'tzv. dohra',
				right: false
			}
		]
	},
	{
		name: 'Product backlog obsahuje mimo jiné:',
		answers: [
			{
				body: 'Požadavky v podobě případů užití',
				right: false
			},
			{
				body: 'Priority požadavků',
				right: true
			},
			{
				body: 'Odhady pracnosti',
				right: true
			}
		]
	},
	{
		name: 'Které z následujících metodik jsou agilní:',
		answers: [
			{
				body: 'SCRUM',
				right: true
			},
			{
				body: 'Unified Process',
				right: false
			},
			{
				body: 'Feature-Driven Development',
				right: true
			}
		]
	},
	{
		name: 'Společnými rysy všech agilních metodik jsou',
		answers: [
			{
				body: 'Iterativní a inkrementální vývoj s krátkými iteracemi',
				right: true
			},
			{
				body: 'Komunikace mezi zákazníkem a vývojovým týmem',
				right: true
			},
			{
				body: 'Důkladná dokumentace všech pracovních postupů',
				right: false
			}
		]
	},
	{
		name: 'Při agilním vývoji by mělo platit, že:',
		answers: [
			{
				body: 'Individuality a interakce mají přednost před procesy a nástroji.',
				right: true
			},
			{
				body: 'Fungující software má přednost před obsáhlou dokumentací.',
				right: true
			},
			{
				body: 'Spolupráce se zákazníkem má přednost před sjednáváním smluv.',
				right: true
			}
		]
	},
	{
		name: 'Co je při agilním přístupu fixní:',
		answers: [
			{
				body: 'Čas',
				right: true
			},
			{
				body: 'Zdroje',
				right: true
			},
			{
				body: 'Funkcionalita',
				right: false
			}
		]
	},
	{
		name: 'Co je při tradičím přístupu fixní:',
		answers: [
			{
				body: 'Čas',
				right: false
			},
			{
				body: 'Zdroje',
				right: false
			},
			{
				body: 'Funkcionalita',
				right: true
			}
		]
	},
	{
		name: 'Metodika Unified Process je vhodná v situaci, kdy:',
		answers: [
			{
				body: 'Jsou na začátku projektu jasně stanovené požadavky na SW',
				right: true
			},
			{
				body: 'Předpokládá se agilní přístup',
				right: false
			},
			{
				body: 'Je požadováno, aby byl po celou dobu jasně stanovený plán prací',
				right: true
			}
		]
	},
	{
		name: 'Metodika Unified Process je:',
		answers: [
			{
				body: 'Inkrementální',
				right: true
			},
			{
				body: 'Iterativní',
				right: true
			},
			{
				body: 'Agilní',
				right: false
			}
		]
	},
	{
		name: 'Metodika Unified Process je:',
		answers: [
			{
				body: 'tzv. user story driven',
				right: false
			},
			{
				body: 'tzv. use case driven',
				right: true
			},
			{
				body: 'tzv. business process driven',
				right: false
			}
		]
	},
	{
		name: 'Pořadí workflow v metodice UP je:',
		answers: [
			{
				body: 'Požadavky, návrh, analýza, implementace, testování',
				right: false
			},
			{
				body: 'Požadavky, analýza, návrh, implementace, testování',
				right: true
			},
			{
				body: 'Analýza, návrh, implementace, nasazení, testování',
				right: false
			}
		]
	},
	{
		name: 'Pořadí fází metodiky UP je:',
		answers: [
			{
				body: 'Inception, Elaboration, Construction, Transition',
				right: true
			},
			{
				body: 'Inception, Elaboration, Implementation, Transition',
				right: false
			},
			{
				body: 'Elaboration, Inception, Implementation, Transition',
				right: false
			}
		]
	},
	{
		name: 'Ve které fázi metodiky UP probíhá nejmenší část testování:',
		answers: [
			{
				body: 'Elaboration',
				right: true
			},
			{
				body: 'Construction',
				right: false
			},
			{
				body: 'Transition',
				right: false
			}
		]
	},
	{
		name: 'Ve které fázi metodiky UP probíhá největší část analýzy:',
		answers: [
			{
				body: 'Inception',
				right: false
			},
			{
				body: 'Elaboration',
				right: true
			},
			{
				body: 'Construction',
				right: false
			}
		]
	},
	{
		name: 'Ve které fázi metodiky UP probíhá největší část návrhu:',
		answers: [
			{
				body: 'Inception',
				right: false
			},
			{
				body: 'Elaboration',
				right: false
			},
			{
				body: 'Construction',
				right: true
			}
		]
	},
	{
		name: 'Ve které fázi metodiky UP probíhá největší část psaní kódu:',
		answers: [
			{
				body: 'Elaboration',
				right: false
			},
			{
				body: 'Construction',
				right: true
			},
			{
				body: 'Transition',
				right: false
			}
		]
	},
	{
		name: 'Které z následujících diagramů se používají v metodice UP při analýze:',
		answers: [
			{
				body: 'Diagram případů užití (Use case diagram)',
				right: false
			},
			{
				body: 'Entitně-relační diagram (ERD)',
				right: false
			},
			{
				body: 'Diagram posloupností (Sequence diagram)',
				right: true
			}
		]
	},
	{
		name: 'Které z následujících diagramů se používají v metodice UP pro zachycení požadavků:',
		answers: [
			{
				body: 'Diagram případů užití (Use case diagram)',
				right: true
			},
			{
				body: 'Diagram tříd (Class diagram)',
				right: false
			},
			{
				body: 'Diagram posloupností (Sequence diagram)',
				right: true
			}
		]
	},
	{
		name: 'Původní COCOMO používá na vstupu:',
		answers: [
			{
				body: '3 modely výpočtu a 2 vývojové módy',
				right: false
			},
			{
				body: '3 modely výpočtu a velikost kódu',
				right: true
			},
			{
				body: '2 vývojové módy a velikost kódu',
				right: false
			}
		]
	},
	{
		name: 'Původní COCOMO (tj. v základní verzi) odhaduje pracnost:',
		answers: [
			{
				body: 'na základě velikosti kódu',
				right: true
			},
			{
				body: 'na základě počtu funkčních bodů',
				right: false
			},
			{
				body: 'na základě vztahů, které lze odvodit z Putnamovy rovnice',
				right: true
			}
		]
	},
	{
		name: 'Pomocí COCOMO se odhaduje:',
		answers: [
			{
				body: 'úsilí a doba potřebná na vývoj SW',
				right: true
			},
			{
				body: 'doba potřebná na vývoj SW a pracnost ',
				right: true
			},
			{
				body: 'velikost kódu v KSLOC',
				right: false
			}
		]
	},
	{
		name: 'Pracnost vývoje SW se uvádí jako počet:',
		answers: [
			{
				body: 'člověkoměsíců nebo člověkodnů',
				right: true
			},
			{
				body: 'měsíců nebo dnů',
				right: false
			},
			{
				body: 'řádků zdrojového kódu nebo KSLOC',
				right: false
			}
		]
	},
	{
		name: 'Doba vývoje SW se uvádí jako počet:',
		answers: [
			{
				body: 'člověkoměsíců ',
				right: false
			},
			{
				body: 'člověkodnů',
				right: false
			},
			{
				body: 'měsíců',
				right: true
			}
		]
	},
	{
		name: 'Složitost je úměrná:',
		answers: [
			{
				body: 'velikosti kódu',
				right: false
			},
			{
				body: 'pracnosti vývoje',
				right: true
			},
			{
				body: 'době vývoje',
				right: true
			}
		]
	},
	{
		name: 'Kterému vývojovému módu v COCOMO  odpovídají nejsložitější projekty:',
		answers: [
			{
				body: 'organickému',
				right: false
			},
			{
				body: 'bezprostřednímu',
				right: false
			},
			{
				body: 'vázanému',
				right: true
			}
		]
	},
	{
		name: 'Který výpočetní model COCOMO používá korekční faktor:',
		answers: [
			{
				body: 'základní',
				right: false
			},
			{
				body: 'střední',
				right: true
			},
			{
				body: 'pokročilý',
				right: true
			}
		]
	},
	{
		name: 'Které atributy mají vliv na korekční faktor COCOMO:',
		answers: [
			{
				body: 'atributy SW produktu',
				right: true
			},
			{
				body: 'atributy vývojového týmu',
				right: true
			},
			{
				body: 'atributy projektu',
				right: true
			}
		]
	},
	{
		name: 'Pokud korekční faktor nemá vliv na výpočet COCOMO, je jeho hodnota:',
		answers: [
			{
				body: '0',
				right: false
			},
			{
				body: '½',
				right: false
			},
			{
				body: '1',
				right: true
			}
		]
	},
	{
		name: 'Korekční faktor v základním COCOMO:',
		answers: [
			{
				body: 'Je součinem hodnot 15 atributů (cost drivers) specifických pro vývojový proces.',
				right: true
			},
			{
				body: 'Je součtem hodnot 15 atributů (cost drivers) specifických pro vývojový proces.',
				right: false
			},
			{
				body: 'Se počítá na základě KSLOC.',
				right: false
			}
		]
	},
	{
		name: 'Které modely používá COCOMO2:',
		answers: [
			{
				body: 'Aplication Composition Model',
				right: true
			},
			{
				body: 'Post Design Model',
				right: false
			},
			{
				body: 'Early Architecture Model  ',
				right: false
			}
		]
	},
	{
		name: 'Nejvíce parametrů má výpočet pomocí COCOMO 2, když se použije:',
		answers: [
			{
				body: 'Aplication Composition Model',
				right: false
			},
			{
				body: 'Early Design Model',
				right: false
			},
			{
				body: 'Post Architecture Model  ',
				right: true
			}
		]
	},
	{
		name: 'Výčty COCOMO 2 během vývoje SW se používají v průběhu životního cyklu v pořadí:',
		answers: [
			{
				body: 'Nejprve Aplication Composition Model, pak Early Design Model a nejpozději Post Architecture Model  ',
				right: true
			},
			{
				body: 'Nejprve Early Design Model, pak Post Architecture Model a nejpozději Aplication Composition Model',
				right: false
			},
			{
				body: 'Nejprve Post Architecture Model, pak Aplication Composition Model a nejpozději Early Design Model',
				right: false
			}
		]
	},
	{
		name: 'Vztah mezi velikostí SW, dobou vývoje a pracností udává:',
		answers: [
			{
				body: 'Putnamova rovnice',
				right: true
			},
			{
				body: 'COCOMO 2',
				right: true
			},
			{
				body: 'Brooksův zákon',
				right: false
			}
		]
	},
	{
		name: 'Funkční body měří:',
		answers: [
			{
				body: 'aplikační kód',
				right: false
			},
			{
				body: 'aplikační funkce',
				right: true
			},
			{
				body: 'aplikační data',
				right: true
			}
		]
	},
	{
		name: 'Funkční body vztažené k transakčním funkcím jsou:',
		answers: [
			{
				body: 'Externí výstupy (EO - External Outputs)',
				right: true
			},
			{
				body: 'Vnitřní logické soubory (ILF - Internal Logical Files)',
				right: false
			},
			{
				body: 'Soubory vnějšího rozhraní (EIF - External Interface Files)',
				right: false
			}
		]
	},
	{
		name: 'Funkční body vztažené k datovým funkcím jsou:',
		answers: [
			{
				body: 'Externí výstupy (EO - External Outputs)',
				right: false
			},
			{
				body: 'Vnitřní logické soubory (ILF - Internal Logical Files)',
				right: true
			},
			{
				body: 'Soubory vnějšího rozhraní (EIF - External Interface Files)',
				right: true
			}
		]
	},
	{
		name: 'Uživatelem v aplikaci udržovaná tabulka nebo soubor je z pohledu FP:',
		answers: [
			{
				body: 'Externí vstup (EI - External Inputs)',
				right: false
			},
			{
				body: 'Vnitřní logický soubor (ILF - Internal Logical Files)',
				right: true
			},
			{
				body: 'Soubor vnějšího rozhraní (EIF - External Interface Files)',
				right: false
			}
		]
	},
	{
		name: 'Databáze čtená pomocí jiné aplikace je z pohledu FP:',
		answers: [
			{
				body: 'Externí vstup (EI - External Inputs)',
				right: false
			},
			{
				body: 'Vnitřní logický soubor (ILF - Internal Logical Files)',
				right: false
			},
			{
				body: 'Soubor vnějšího rozhraní (EIF - External Interface Files)',
				right: true
			}
		]
	},
	{
		name: 'Datová obrazovka s přidáním, změnou a rušením se z pohledu FP považuje za:',
		answers: [
			{
				body: 'Externí vstupy (EI - External Inputs)',
				right: true
			},
			{
				body: 'Externí výstupy (EO - External Outputs)',
				right: false
			},
			{
				body: 'Externí dotazy (EQ - External Enquiry)',
				right: false
			}
		]
	},
	{
		name: 'Datová obrazovka s přidáním, změnou a rušením se započítá jako:',
		answers: [
			{
				body: '1 Externí vstup (EI - External Inputs)',
				right: false
			},
			{
				body: '3 Externí vstupy (EI - External Inputs)',
				right: true
			},
			{
				body: '1 Externí dotaz (EQ - External Enquiry)',
				right: false
			}
		]
	},
	{
		name: 'Automatická data nebo transakce směrem k jiným aplikacím se započítá jako:',
		answers: [
			{
				body: 'Externí výstup (EO - External Outputs)',
				right: true
			},
			{
				body: 'Vnitřní logický soubor (ILF - Internal Logical Files)',
				right: false
			},
			{
				body: 'Soubor vnějšího rozhraní (EIF - External Interface Files)',
				right: false
			}
		]
	},
	{
		name: 'Při výpočtu neupravených funkčních bodů se používá:',
		answers: [
			{
				body: '14 charakteristik hodnocených podle stupně vlivu na aplikaci',
				right: false
			},
			{
				body: 'matice složitosti vstupů',
				right: true
			},
			{
				body: 'matice složitosti souborů',
				right: true
			}
		]
	},
	{
		name: 'Při výpočtu upravených funkčních bodů z neupravených funkčních bodů se používá:',
		answers: [
			{
				body: '14 charakteristik hodnocených podle stupně vlivu na aplikaci',
				right: true
			},
			{
				body: 'matice složitosti vstupů',
				right: false
			},
			{
				body: 'matice složitosti souborů',
				right: false
			}
		]
	},
	{
		name: 'Funkční body měří:',
		answers: [
			{
				body: 'Velikost SW',
				right: true
			},
			{
				body: 'Délku zdrojového kódu',
				right: false
			},
			{
				body: 'Složitost',
				right: false
			}
		]
	},
	{
		name: 'Hodnota LOC (resp. SLOC) udává:',
		answers: [
			{
				body: 'Velikost SW',
				right: true
			},
			{
				body: 'Délku zdrojového kódu',
				right: true
			},
			{
				body: 'Složitost kódu',
				right: false
			}
		]
	},
	{
		name: 'Poměr velikosti zdrojového kódu a dokumentace je metrika:',
		answers: [
			{
				body: 'Produktu',
				right: true
			},
			{
				body: 'Procesu',
				right: false
			},
			{
				body: 'Zdrojů',
				right: false
			}
		]
	},
	{
		name: 'Úsilí vynaložené na jeden funkční bod při vývoji aplikace je metrika:',
		answers: [
			{
				body: 'Produktu',
				right: false
			},
			{
				body: 'Procesu',
				right: true
			},
			{
				body: 'Zdrojů',
				right: false
			}
		]
	},
	{
		name: 'Počet vysokoškolsky vzdělaných členů vývojového týmu je metrika: ',
		answers: [
			{
				body: 'Produktu',
				right: false
			},
			{
				body: 'Procesu',
				right: false
			},
			{
				body: 'Zdrojů',
				right: true
			}
		]
	},
	{
		name: 'Metrika LOC (Line of Code) je:',
		answers: [
			{
				body: 'Závislé na programátorovi',
				right: true
			},
			{
				body: 'Nezávislé na použitých technologiích',
				right: false
			},
			{
				body: 'Náročné na výpočet',
				right: false
			}
		]
	},
	{
		name: 'Metrika FP (Function points) je:',
		answers: [
			{
				body: 'Nezávislá na programovacím jazyku',
				right: true
			},
			{
				body: 'Závislá na programátorovi',
				right: false
			},
			{
				body: 'Závislá na velikosti týmu',
				right: false
			}
		]
	},
	{
		name: 'Pro dva programy, které dělají totéž, přičemž jeden je napsaný v asembleru a druhý v Javě, bude platit:',
		answers: [
			{
				body: 'Program napsaný v Javě má více FP',
				right: false
			},
			{
				body: 'Program napsaný v asembleru má méně FP',
				right: false
			},
			{
				body: 'Oba programy mají stejný počet FP',
				right: true
			}
		]
	},
	{
		name: 'Pro dva programy, které dělají totéž, přičemž jeden je napsaný v asembleru a druhý v Javě, bude platit:',
		answers: [
			{
				body: 'Program napsaný v Javě má méně LOC',
				right: true
			},
			{
				body: 'Program napsaný v asembleru má více LOC',
				right: true
			},
			{
				body: 'Oba programy mají stejný počet LOC',
				right: false
			}
		]
	},
	{
		name: 'Cyklomatická složitost:',
		answers: [
			{
				body: 'Udává minimální počet lineárně nezávislých cest skrz zdrojový kód.',
				right: true
			},
			{
				body: 'Ukazuje, jak složité bude testování.',
				right: true
			},
			{
				body: 'Udává velikost zdrojového kódu v jednotlivých nezávislých cestách programem.',
				right: false
			}
		]
	},
	{
		name: 'Která z následujících metrik velikosti SW je nejnáročnější na výpočet:',
		answers: [
			{
				body: 'Počet řádků zdrojového kódu',
				right: false
			},
			{
				body: 'Funkční body',
				right: true
			},
			{
				body: 'Cyklomatická složitost',
				right: false
			}
		]
	},
	{
		name: 'Mezi aspekty kvality SW patří odchylky od:',
		answers: [
			{
				body: 'požadavků',
				right: true
			},
			{
				body: 'standardů',
				right: true
			},
			{
				body: 'běžných zvyklostí',
				right: true
			}
		]
	},
	{
		name: 'Mezi aspekty kvality SW patří odchylky od:',
		answers: [
			{
				body: 'požadavků',
				right: true
			},
			{
				body: 'standardů',
				right: true
			},
			{
				body: 'kritérií interního auditu',
				right: false
			}
		]
	},
	{
		name: 'Mezi kategorie faktorů kvality SW patří:',
		answers: [
			{
				body: 'operační charakteristiky',
				right: true
			},
			{
				body: 'schopnost akceptovat změny',
				right: true
			},
			{
				body: 'adaptibilita na nové prostředí',
				right: true
			}
		]
	},
	{
		name: 'Množství výpočetních prostředků a kódu, které program potřebuje na splnění svých funkcí, se označuje jako:',
		answers: [
			{
				body: 'Spolehlivost',
				right: false
			},
			{
				body: 'Efektivita',
				right: true
			},
			{
				body: 'Použitelnost',
				right: false
			}
		]
	},
	{
		name: 'Úsilí vyžadované na vyhledání a opravu chyby v programu, se označuje jako:',
		answers: [
			{
				body: 'Testovatelnost',
				right: false
			},
			{
				body: 'Efektivita',
				right: false
			},
			{
				body: 'Udržovatelnost',
				right: true
			}
		]
	},
	{
		name: 'Rozsah toho, jak program splňuje specifikaci a uživatelovy záměry, se označuje jako:',
		answers: [
			{
				body: 'Korektnost',
				right: true
			},
			{
				body: 'Použitelnost',
				right: false
			},
			{
				body: 'Spolehlivost',
				right: false
			}
		]
	},
	{
		name: 'Mezi skupiny faktorů kvality (McCall) patří:',
		answers: [
			{
				body: 'Činnost produktu',
				right: true
			},
			{
				body: 'Revize produktu',
				right: true
			},
			{
				body: 'Přemístění produktu',
				right: true
			}
		]
	},
	{
		name: 'SW projekt považujeme za dokončený s výhradami pokud:',
		answers: [
			{
				body: 'je dokončen včas, bez překročení rozpočtu, se všemi specifikovanými rysy a funkcemi.',
				right: false
			},
			{
				body: 'je dokončen se všemi specifikovanými rysy a funkcemi, ale překročil rozpočet nebo je opožděný.',
				right: true
			},
			{
				body: 'je dokončen včas, bez překročení rozpočtu, ale má méně rysů a funkcí, než bylo původně specifikováno.',
				right: true
			}
		]
	},
	{
		name: 'SW projekt považujeme za neúspěšný pokud:',
		answers: [
			{
				body: 'byl zastaven před dokončením, ',
				right: true
			},
			{
				body: 'nebyl implementován, ',
				right: true
			},
			{
				body: 'výsledek byl vyřazen po instalaci.',
				right: true
			}
		]
	},
	{
		name: 'Cena odstranění závady je zpravidla nejvyšší ve fázi:',
		answers: [
			{
				body: 'Analýzy',
				right: false
			},
			{
				body: 'Testování',
				right: false
			},
			{
				body: 'Provozu',
				right: true
			}
		]
	},
	{
		name: 'Klasifikace defektů (např. ODC) napomáhá:',
		answers: [
			{
				body: 'Opravit defekt rychleji a efektivněji',
				right: false
			},
			{
				body: 'Určit etapu projektu, kdy defekt vznikl',
				right: true
			},
			{
				body: 'Kvantifikovat počty defektů, které způsobily jednotlivé osoby v týmu',
				right: false
			}
		]
	},
	{
		name: 'Chyby, které lze opravit zlepšeným řízením sdílených a RT prostředků, se označují jako chyby:',
		answers: [
			{
				body: 'časování/serializace ',
				right: true
			},
			{
				body: 'sestavení/spojování',
				right: false
			},
			{
				body: 'přiřazení/ověřování',
				right: false
			}
		]
	},
	{
		name: 'Defekty typu „rozhraní“ mají své příčiny obvykle ve fázi:',
		answers: [
			{
				body: 'Analýzy',
				right: false
			},
			{
				body: 'Návrhu',
				right: true
			},
			{
				body: 'Psaní kódu',
				right: false
			}
		]
	},
	{
		name: 'Obvyklé (správné) pořadí testů je:',
		answers: [
			{
				body: 'integrační testy, unit testy, systémové testy, ',
				right: false
			},
			{
				body: 'unit testy, integrační testy, systémové testy ',
				right: true
			},
			{
				body: 'systémové testy, integrační testy, unit testy',
				right: false
			}
		]
	},
	{
		name: 'Co ukazuje testování',
		answers: [
			{
				body: 'výkon',
				right: true
			},
			{
				body: 'chyby',
				right: true
			},
			{
				body: 'nepřítomnost defektů',
				right: false
			}
		]
	},
	{
		name: 'Test proti vnitřní činnosti SW se označuje jako:',
		answers: [
			{
				body: 'Verifikace',
				right: true
			},
			{
				body: 'Validace',
				right: false
			},
			{
				body: 'Test typu „bílá skříňka“',
				right: true
			}
		]
	},
	{
		name: 'Test proti specifikovaným funkcím SW se označuje jako:',
		answers: [
			{
				body: 'Validace',
				right: true
			},
			{
				body: 'Test typu „bílá skříňka“',
				right: false
			},
			{
				body: 'Test typu „černá skříňka“',
				right: true
			}
		]
	},
	{
		name: 'Drivery se používají při:',
		answers: [
			{
				body: 'Unit testech',
				right: true
			},
			{
				body: 'Integračních testech shora – dolů',
				right: false
			},
			{
				body: 'Integračních testech zdola – nahoru',
				right: true
			}
		]
	},
	{
		name: 'Tzv. „stubs“ se používají při:',
		answers: [
			{
				body: 'Unit testech',
				right: false
			},
			{
				body: 'Integračních testech shora – dolů',
				right: true
			},
			{
				body: 'Integračních testech zdola – nahoru',
				right: false
			}
		]
	},
	{
		name: 'Cyklomatická složitost ukazuje náročnost:',
		answers: [
			{
				body: 'Testování typu „bílá skříňka“',
				right: true
			},
			{
				body: 'Testování typu „černá skříňka“',
				right: false
			},
			{
				body: 'Integračních testů',
				right: false
			}
		]
	},
	{
		name: 'Do týmu, který se účastní inspekce SW, patří:',
		answers: [
			{
				body: 'Inspektor',
				right: true
			},
			{
				body: 'Tester',
				right: false
			},
			{
				body: 'Autor',
				right: true
			}
		]
	},
	{
		name: 'Do týmu, který se účastní inspekce SW, patří:',
		answers: [
			{
				body: 'Zapisovatel',
				right: true
			},
			{
				body: 'Tester',
				right: false
			},
			{
				body: 'Vedoucí týmu',
				right: true
			}
		]
	},
	{
		name: 'Mezi cíle formálního přezkoušení SW patří:',
		answers: [
			{
				body: 'Zajištění jednotného vývoje',
				right: true
			},
			{
				body: 'Odhalení chyb',
				right: true
			},
			{
				body: 'Zefektivnění vývojového procesu',
				right: false
			}
		]
	},
	{
		name: 'Defekty, které způsobují pád systému a zabraňují tak v jeho používání, se označují jako:',
		answers: [
			{
				body: 'Kritické',
				right: true
			},
			{
				body: 'Středně závažné',
				right: false
			},
			{
				body: 'Kosmetické',
				right: false
			}
		]
	},
	{
		name: 'Vrchol počtu pracovníků v průběhu SW projektu je:',
		answers: [
			{
				body: 'Ihned na samém začátku projektu',
				right: false
			},
			{
				body: 'Cca ve 40% doby trvání projektu',
				right: true
			},
			{
				body: 'Před fází nasazení na produkční prostředí zákazníka',
				right: true
			}
		]
	},
	{
		name: 'Projektová kalkulace SW projektu by měla zahrnovat:',
		answers: [
			{
				body: 'Odhady pracnosti',
				right: true
			},
			{
				body: 'Rizika',
				right: true
			},
			{
				body: 'Subdodávky',
				right: true
			}
		]
	},
	{
		name: 'Projektová kalkulace SW projektu by měla zahrnovat:',
		answers: [
			{
				body: 'Odhady času',
				right: false
			},
			{
				body: 'HW náklady',
				right: true
			},
			{
				body: 'Náklady na licence',
				right: true
			}
		]
	}
];

export default questions;
