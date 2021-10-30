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
				right: false
			},
			{
				body: 'Psaní kódu.',
				right: true
			}
		]
	},
	{
		name: 'Mezi životní cykly vývoje dle obrysové (požiadavky nie su striktne dané, iba cca 50% - 70% presne dané) specifikace patří:',
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
				right: false
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
	}
];

export default questions;
