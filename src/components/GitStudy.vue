<template>
  <div>
    <ul>
    <li>版本控制问题，改了太多遍，想要知道之前改的内容，和别人一起编辑会不会存在冲突，也不知道改的啥</li>
    <li>git是linus使用c语言开发</li>
    <li>集中式版本控制器和分布式版本控制器区别
      <ul>
        <li>集中式版本控制器，过程：中央服务器拿-->改完-->返回给中央服务器，最大缺点：在网络缓慢情况下，提交缓慢</li>
        <li>分布式版本控制器，不存在中央服务器。个人电脑有完整的版本库</li>
        <li></li>
      </ul>
    </li>
    <li>使用方法
      <ul>
        <li>使用git init可以初始化，这样该目录就可以由git管理了</li>
        <Copy text="git init"></Copy>
        <li>git add '文件名'-->是用来添加要git的文件，可反复多次使用，添加多个文件。注意：只有add后，commit提交的才是最新修改的内容</li>
        <Copy text="git add '文件名'"></Copy>
        <li>git commit -m "注释说明"-->是用来提交刚刚添加的文件</li>
        <Copy text="git commit -m '注释说明'"></Copy>
        <li>未提交在vscode里面标记U，已提交没有标记，但是修改后会标记M</li>
        <li>输入git status查看修改后的状态</li>
        <Copy text="git status"></Copy>
        <li>使用git log可以查看修改的版本信息</li>
        <Copy text="git log"></Copy>
        <li>使用git reset HEAD~1回退版本，这样回退后，就是提交的前一个版本，本地修改的内容依然还会在</li>
        <Copy text="git reset HEAD~1"></Copy>
        <Copy text="git reset commit编号(使用git log查看)"></Copy>
        <li>git reflog查看命令历史，以便确定要回到未来的哪个版本</li>
        <Copy text="git reflog"></Copy>
        <li>"工作区(本地)→暂存区(git)→分支"，一旦提交，且工作区又没有干什么，那么暂存区就是干净的</li>
        <li>撤销的情况，三种</li>
        <li>git checkout -- '文件名'①命令在还没有add之前，可以直接撤销刚刚的修改；②如果已经add，再修改，那么也可以撤销刚刚修改的</li>
        <Copy text=" git checkout -- '文件名'"></Copy>
        <li>③修改后，且已经add，这时修改后的内容已经到缓存区，git reset HEAD '文件名'可以把暂存区的内容回退到工作区</li>
        <Copy text=" git reset HEAD '文件名' | git checkout -- '文件名' "></Copy>
        <li>删除文件，使用git rm '文件名'，然后再commit。注意：①rm指令删除的是暂存区里面的东西，然后commit确保版本库也没了；②使用checkout指令可以保证恢复到版本库的那个版本</li>
        <Copy text=" git rm '文件名'"></Copy>
      </ul>
    </li>
    <li>添加GitHub的SSH设置
      <ul>
        <li>在指定目录下打开git bash，然后输入指令ssh-keygen -t rsa -C "1225018666@qq.com"</li>
        <li>在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件</li>
        <li>id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，也是在GitHub中需要复制的内容</li>
      </ul>
    </li>
    <li>添加远程git仓库
      <ul>
      <li>在github新建一个仓库，然后在本地使用指令git remote add origin git@github.com:lhrnhr/fontstudy.git，其中origin是远程库的名字</li>
      <Copy text="git remote add origin git@github.com:lhrnhr/frontstudy.git"></Copy>
      <li>本地库推送到git远程库,后面的每次推送不需要加-u</li>
      <Copy text="git push -u origin master"></Copy>
      <li>克隆指令</li>
      <Copy text="git clone git@github.com:lhrnhr/frontstudy.git"></Copy>
      <li>删除远程库</li>
      <Copy text="git remote rm origin"></Copy>
    </ul>
    </li>
    <li>分支管理
      <ul>
        <li>创建并切换到dev分支，使用指令git checkout -b dev相当于，新建分支指令git branch dev→切换分支指令git checkout dev</li>
      <Copy text="git checkout -b 分支名"></Copy>
      <Copy text="git branch 分支名"></Copy>
      <Copy text="git checkout 分支名"></Copy>
        <li>在切换到dev分支时，需要保证修改的内容在dev分支先提交</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <span>dev</span>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GitStudy',
  data () {
    return {
      a: 'aa',
      address: 'www.baidu.com'
    }
  },
  methods: {
    fine () {
      alert('hhh')
    }
  }
}
</script>

<style>

</style>
