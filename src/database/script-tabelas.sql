create database if not exists hallownet;
use hallownet;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar(60),
username varchar(15) unique key,
email varchar(40) unique key,
senha varchar(80),
inscricao datetime default current_timestamp
)auto_increment=100;

create table conquistas(
id int primary key auto_increment,
nome varchar(45),
imagem varchar(800)
);


create table usuario_conquistas(
fkusuario int,
fkconquista int,
dataHorario datetime,
status boolean default false,
primary key (fkusuario,fkconquista),
foreign key (fkusuario) references usuario(idUsuario),
foreign key (fkconquista) references conquistas(id)
);

insert into conquistas(nome, imagem) 
	value('Afortunado', '<img src="./assets/conquistas/Achievement_Charmed.png">'),
		('Encantado', '<img src="./assets/conquistas/Achievement_Enchanted.png">'),
        ('Abençoado', '<img src="./assets/conquistas/Achievement_Blessed.png">'),
        ('Protegido', '<img src="./assets/conquistas/Achievement_Protected.png">'),
        ('Mascarado', '<img src="./assets/conquistas/Achievement_Masked.png">'),
        ('Cheio de Alma', '<img src="./assets/conquistas/Achievement_Soulful.png">'),
        ('Alma do mundo', '<img src="./assets/conquistas/Achievement_Worldsoul.png">'),
        ('Falsidade', '<img src="./assets/conquistas/Achievement_Falsehood.png">'),
        ('Força', '<img src="./assets/conquistas/Achievement_Strength.png">'),
        ('Teste de Resolução','<img src="./assets/conquistas/Achievement_Test_of_Resolve.png">'),
        ('Prova de Resolução','<img src="./assets/conquistas/Achievement_Proof_of_Resolve.png">'),
        ('Iluminação','<img src="./assets/conquistas/Achievement_Illumination.png">'),
        ('Mortalidade','<img src="./assets/conquistas/Achievement_Mortality.png">'),
        ('Libertação','<img src="./assets/conquistas/Achievement_Release.png">'),
        ('Paz','<img src="./assets/conquistas/Achievement_Peace.png">'),
        ('Honra','<img src="./assets/conquistas/Achievement_Honour.png">'),
        ('Respeito','<img src="./assets/conquistas/Achievement_Respect.png">'),
        ('Obssessão','<img src="./assets/conquistas/Achievement_Obsession.png">'),
        ('Execução','<img src="./assets/conquistas/Achievement_Execution.png">'),
        ('Rivalidade','<img src="./assets/conquistas/Achievement_Rivalry.png">'),
        ('Sintonia','<img src="./assets/conquistas/Achievement_Attunement.png">'),
        ('Despertar','<img src="./assets/conquistas/Achievement_Awakening.png">'),
        ('Ascenção','<img src="./assets/conquistas/Achievement_Ascension.png">'),
        ('Amigo das Larvas','<img src="./assets/conquistas/Achievement_Grubfriend.png">'),
        ('Metamorfose','<img src="./assets/conquistas/Achievement_Metamorphosis.png">'),
        ('Conexão','<img src="./assets/conquistas/Achievement_Connection.png">'),
        ('Esperança','<img src="./assets/conquistas/Achievement_Hope.png">'),
        ('Negligência','<img src="./assets/conquistas/Achievement_Neglect.png">'),
        ('Testemunha','<img src="./assets/conquistas/Achievement_Witness.png">'),
        ('Pureza','<img src="./assets/conquistas/Achievement_Purity.png">'),
        ('Casal Feliz','<img src="./assets/conquistas/Achievement_Happy_Couple.png">'),
        ('Consolação','<img src="./assets/conquistas/Achievement_Solace.png">'),
        ('Vazio','<img src="./assets/conquistas/Achievement_Void.png">'),
        ('Professora','<img src="./assets/conquistas/Achievement_Teacher.png">'),
        ('Observador','<img src="./assets/conquistas/Achievement_Watcher.png">'),
        ('Besta','<img src="./assets/conquistas/Achievement_Beast.png">'),
        ('Cartógrafo','<img src="./assets/conquistas/Achievement_Cartographer.png">'),
        ('Conclusão','<img src="./assets/conquistas/Achievement_Completion.png">'),
        ('Conclusão Pura','<img src="./assets/conquistas/Achievement_Pure_Completion.png">'),
        ('Finallização Rápida','<img src="./assets/conquistas/Achievement_Speed_Completion.png">'),
        ('Caçador Habilidoso','<img src="./assets/conquistas/Achievement_Keen_Hunter.png">'),
        ('Verdadeiro Caçador','<img src="./assets/conquistas/Achievement_True_Hunter.png">'),
        ('Alma de Aço','<img src="./assets/conquistas/Achievement_Steel_Soul.png">'),
        ('Coração de Aço','<img src="./assets/conquistas/Achievement_Steel_Heart.png">'),
        ('Speedrun 1','<img src="./assets/conquistas/Achievement_Speedrun_1.png">'),
        ('Speedrun 2','<img src="./assets/conquistas/Achievement_Speedrun_2.png">'),
        ('Guerreiro','<img src="./assets/conquistas/Achievement_Warrior.png">'),
        ('Conquistador','<img src="./assets/conquistas/Achievement_Conqueror.png">'),
        ('Tolo','<img src="./assets/conquistas/Achievement_Fool.png">'),
        ('O Cavaleiro Vazio','<img src="./assets/conquistas/Achievement_The_Hollow_Knight.png">'),
        ('Irmãos Selados','<img src="./assets/conquistas/Achievement_Sealed_Siblings.png">'),
        ('Não Sonhe Mais','<img src="./assets/conquistas/Achievement_Dream_No_More.png">'),
        ('Passagem da Era','<img src="./assets/conquistas/Achievement_Passing_of_the_Age.png">'),
        ('Memória','<img src="./assets/conquistas/Achievement_Memory.png">'),
        ('Romance Sombrio','<img src="./assets/conquistas/Achievement_Dark_Romance.png">'),
        ('Grande Atuação','<img src="./assets/conquistas/Achievement_Grand_Performance.png">'),
        ('Ritual','<img src="./assets/conquistas/Achievement_Ritual.png">'),
        ('Banimento','<img src="./assets/conquistas/Achievement_Banishment.png">'),
        ('Irmandade','<img src="./assets/conquistas/Achievement_Brotherhood.png">'),
        ('Inspiração','<img src="./assets/conquistas/Achievement_Inspiration.png">'),
        ('Foco','<img src="./assets/conquistas/Achievement_Focus.png">'),
        ('Alma e Sombra','<img src="./assets/conquistas/Achievement_Soul_&_Shade.png">'),
        ('Abrace o Vazio','<img src="./assets/conquistas/Achievement_Embrace_the_Void.png">');
        
