### Récupération du projet (à ne faire qu'une seule fois)

`git clone https://github.com/TyTy-cf/hb-angular-firstapp.git`

Une fois le projet récupéré, il faut faire un 

`npm install`

### Une fois le projet récupéré...

Par défaut vous serez sur la branche `main`, vous pouvez le vérifier par la commande `git branch -l` 

Il faut créer une branche, car je ne veux pas que vous travailliez sur la branche `main`, afin d'éviter des conflits à régler.

Pour créer une branche il faut utiliser la commande :

`git checkout -b xxxx` où xxxx est le nom de votre branche

Et voilà vous pouvez travailler sur votre nouvelle branche !

### Mettre à jour le projet

#### 1. Si vous êtes sur votre branche

Vérifier d'abord vos changements, via un `git status`
Si des modifications ont été faite, alors il faut d'abord les sauvegarder :
- `git add *` ajoute les fichiers au prochain commit
- `git commit -m "votre message de commit"` commit vos changements, autrement dit ils sont sauvés !

Voilà vos changements sont sauvegardés !

Il faut aller sur la branche principale :
`git checkout main`

#### 2. Si vous n'étiez pas sur votre branche (ou si vous avez fait le 1.)

Faire un `git pull` et récupérer les changements

Vous pouvez de nouveau faire un `git checkout -b xxxx` pour vous créer une nouvelle branche pour continuer, sans détruire votre travail qui était sur une autre branche

(PS : à tout moment vous pouvez faire un `git branch -l` pour voir sur quelle branche vous êtes !)
