# Configurar o git
$ git config --global user.name  "Fulano de Tal"
$ git config --global user.email "FulanoDeTal@email.com.br"

# Listar configuração
$ git config --global user.name
$ git config --global user.email
$ git config --list

## Existem 3 niveis system (maquina), global(usuário) e local(projeto)
$ git config --global --edit => Edita variaveis do usuário no VScode

1) CONFIGURAÇÕES NO VSCode
--------------------------
## Configurações que uso ( arquivo - C:\Users\ADMIN\.gitconfig )
[user]
	name  = Alexandre Skinner
	email = AlexandreSkinner@tmassessoria.com.br
[alias]
  l  = !git log --pretty=format:'%C(yellow)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
	lo = !git log --oneline
[push]
  followTags = true     (Faz com que o comando push normal envie ao repo remoto as Tags nomeadas) (*)
[i18n]
	logOutputEncoding = utf-8


2) CRIANDO PROJETO NOVO
-----------------------
# Criando repositório local na pasta corrente e enviar (empurrando) para o Repositorio remoto
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M master
$ git remote add origin https://github.com/AlexandreSkinner/Treino.git
$ git push -u origin master

# Inicializar um repositório remoto a partir de um repositório local já existente
$ git remote add origin https://github.com/AlexandreSkinner/Treino.git
$ git branch -M master
$ git push -u origin master 
  
## NOTA: A chave -u no puch é utilizado a primeira vez para conectar repo local ao remoto, 
## nos próximos push não é mais necessário.

3) CRIANDO PROJETO A PARTIR REPOSITÓRIO REMOTO
----------------------------------------------
# Clonando um repositório Remoto para um repositório local
$ git clone https://github.com/AlexandreSkinner/treino.git

# Configurar o GITHUB como repositório remoto (origin = origem)
$ git remote add origin https://github.com/alexandreskinner/<repositorio>.git
$ git remote add origin https://github.com/alexandreskinner/Treino.git

4) COMANDOS EM GERAL
--------------------
# Verificar qual o repositório remoto está configurado para um determinado repositório local
$ git remote -v

# Remove o ponteiramento <new-remote-repo> do repositorio remoto
$ git remote remove <new-remote-repo>

# Enviando modificações do repositório local para o repositório remoto
$ git push <destino> <origem>
$ git push origin master
$ git push 

# Atualizando seu repositorio local com as modificações do repositorio remoto (faz merge automaticamente)
$ git pull

# Busca alterações que tenham sido feita no repositorio remoto para seu repositorio local (não faz merge)
$ git fetch <remote>
$ git fetch origin

# Verificar o status da working area, staging are e repository
$ git status
$ git status -s

# Colocar arquivo na staging area (trackear)
$ git add <nome.ext>   => Adiciona o arquivo especificado
$ git add -A           => Adicina todos os arquivos de todas as pastas
$ git add --all        => Adicina todos os arquivos de todas as pastas (-A = --all)
$ git add .            => Adiciona todos os arquivos da pastas corrente e subpastas

# Colocar no repositório local
$ git commit -m "Descrição do commit" 

## Status de um arquivo
(??) Untraked - Arquivo que está na sua Workspace (novo) por tanto não controlado pelo git ainda.

(M) Modified - Arquivo que está na sua Workspace, porém é uma arquivo tracked (rastreado) pelo git que foi modificado. Também chamado de Unstaged

(A) Added - Arquivo novo foi adicionado na Stage Area, por tanto preparados para o próximo commit

## Há duas colunas de status na saída: 
 - esquerda: indica o status da área de stage e a coluna
 - direita : indica o status do diretório de trabalho

Exemplo:
 M HELPME.md     ==> Modificado na work stage
A  src/teste.txt ==> Adicionado na stage 

# Verificar os commit realizados 
$ git log
$ git log --oneline
$ git log --oneline --decorate --all
$ git log --oneline --decorate --all --graph
$ git log --pretty=format:'%C(yellow)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

# Exibe o ID de cada commit / commit ammend / restet realizados
$ git reflog

# Crira um novo branch a partir da brach corrente
$ git branch <NomeBranch>
$ git checkout -b <NomeBranch> (Cria a branch e ja muda para ela)

# Renomeia a branch atual para o nome fornecido
$ git branch -m <branch>

# Mudar de branch
$ git checkout <NomeBranch>

# Excluir uma branch depois que realizamos merge
$ git branch -d <NomeBranch> (Exclui apenas se ela estiver alinhada com a master ou branch remota)
$ git branch -D <NomeBranch> (Exclui incondicionalmente)

# Exibe as branch locais
$ git branch

# Exibe as branch locais e remotas
$ git branch -a
* master
  remotes/origin/master

# Exibe as branch locais e remotas - indica também ID do ultimo commit em cada branch  
$ git branch -a -v
* master                693373a Alteração no HELPME.md - Inclusão de mais comandos git
  remotes/origin/master 693373a Alteração no HELPME.md - Inclusão de mais comandos git

# Adicionar repo remoto à configuração do repo local
$ git remote add new-remote-repo https://github.com/alexandreskinner/Treino.git
$ git branch develop                   ==> Cria nova branch
$ git push new-remote-repo develop     ==> Empurra a nova branch develop para o repo remoto

# Merge (Mesclar) - posicionado na master
$ git merge <NomeBranch>

# Remover da staging area para a Working directory
$ git restore --stage <nomeArquivo.ext>
$ git restore --stage b.txt

# Descartando alterações na Working Directory estando o arquivo modified
$ git restore <file>

# Deletar um arquivo do repositório local (arquivo comitado)
$ git rm <nomeArquivo.ext>
$ git rm produtos.html

# Desfazendo modificações ainda não commitada (UnStage), ou seja arquivos com status (M)
# serve para recuperar arquivo deletado ou desfazer uma alteração antes de commitar
$ git checkout -- <arquivo> ou --<commit>
$ git checkout -- b.txt
$ git ckeckout -- f45a7c9 (volta a posição até o commit selecionado)

# Mover de pasta um arquivo para já commitado
$ git mv principal.js js/principal.js

# Refazer o ultimo commit (alterar a mensagem)
$ git commit --amend -m "<nova mensagem>"


## Reverter um git add, ou seja, retirar um arquivo da Stage Area para a Workspace
$ git reset <nomeArquivo.ext>
$ git reset teste.js

## Reverter um commit, existem opções que indicam a extensão do comando, é necessário informar a 
## ID do commit que ficara no HEAD 
$ git reset <HashDoCommit> --<opção>
$ git reset 8643aee --<opção> 
$ git reset HEAD~1 --<opção>

# 1) Opção --soft 
# Retorna os arquivos, para a Stage, de todos os commit anteriores ao commit identificado no comando
# pelo seu ID (HASH) ou pela posição relativa ao ponteiro HEAD (HEAD~1, HEAD~2, HEAD~N). 
# Preservando o conteúdo dos arquivos 
$ git reset 8643aee --soft   ou
$ git reset HEAD~1  --soft

# 2) Opção --mixed 
# Retorna os arquivos do commit direto para o Workspace mantendo as alterações do commit desfeito
$ git reset HEAD~1 --mixed

# 3) Opção --hard 
# Retorna os arquivos do commit direto para o Workspace sem as alterações que foram feitas no commit desfeito
$ git reset HEAD~1 --hard


# Retira o arquivo do repositório local (comitado) para a staging are - preserva as mudanças
$ git reset -- <nomeArquivo.ext>
$ git reset -- b.txt

# Reverter o penultimo commit
$ git reset HEAD~1

# Reverte todo conteúdo dos arquivo que estejam na Stage ou Workspace area, sendo
# que os arquivos da Stage retornam para a Workspace
$ git reset --hard

# Criação de TAG nomeada
$ git tag 1.0 –m “realease 1.0”

## Associar uma TAG a um commit qualquer
$ git tag -a "0.1.beta" -m "realease 0.1.beta" <ID commit>
$ git tag -a "0.1.beta" -m "realease 0.1.beta" 8643aee

## Removendo uma TAG
$ git tag -d <"TagName">
$ git tag -d "1.0"

## Normalmente o push não envia as Tags ao repositório remoto, para que isso possa ser feito 
## temos que incluir no comanda a flag abaixo que enviará apenas tags anotadas (*)
git push origin master --follow-tags

## Remover uma Tag localmente e do repositorio remoto
$ git tag -d "1.0"                 ==> Exclui localmente
$ git push --delete origin "1.0"   ==> Exclui remotamente