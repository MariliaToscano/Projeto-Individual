create database if not exists hallownet;
use hallownet;

create table usuario(
id int primary key auto_increment,
nomeCompleto varchar(60),
username varchar(15) unique key,
email varchar(40) unique key,
senha varchar(80)
)auto_increment=100;

create table conquistas(
id int primary key auto_increment,
nome varchar(45)
);

create table usuario_conquistas(
fkusuario int,
fkconquista int,
dataHorario datetime,
status boolean default false,
primary key (fkusuario,fkconquista),
foreign key (fkusuario) references usuario(id),
foreign key (fkconquista) references conquistas(id)
);

insert into conquistas(nome) 
	value('Afortunado'),
		('Encantado'),
        ('Abençoado'),
        ('Protegido'),
        ('Mascarado'),
        ('Cheio de Alma'),
        ('Alma do mundo'),
        ('Falsidade'),
        ('Força'),
        ('Teste de Resolução'),
        ('Prova de Resolução'),
        ('Iluminação'),
        ('Mortalidade'),
        ('Libertação'),
        ('Paz'),
        ('Honra'),
        ('Respeito'),
        ('Obssessão'),
        ('Execução'),
        ('Rivalidade'),
        ('Sintonia'),
        ('Despertar'),
        ('Ascenção'),
        ('Amigo das Larvas'),
        ('Metamorfose'),
        ('Conexão'),
        ('Esperança'),
        ('Negligência'),
        ('Testemunha'),
        ('Pureza'),
        ('Casal Feliz'),
        ('Consolação'),
        ('Vazio'),
        ('Professora'),
        ('Observador'),
        ('Besta'),
        ('Cartógrafo'),
        ('Conclusão'),
        ('Conclusão Pura'),
        ('Finallização Rápida'),
        ('Caçador Habilidoso'),
        ('Verdadeiro Caçador'),
        ('Alma de Aço'),
        ('Coração de Aço'),
        ('Speedrun 1'),
        ('Speedrun 2'),
        ('Guerreiro'),
        ('Conquistador'),
        ('Tolo'),
        ('O Cavaleiro Vazio'),
        ('Irmãos Selados'),
        ('Não Sonhe Mais'),
        ('Passagem da Era'),
        ('Memória'),
        ('Romance Sombrio'),
        ('Grande Atuação'),
        ('Ritual'),
        ('Banimento'),
        ('Irmandade'),
        ('Inspiração'),
        ('Foco'),
        ('Alma e Sombra'),
        ('Abrace o Vazio');
        
