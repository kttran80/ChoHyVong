<!-- TOC insertAnchor:true orderedList:true -->

1. [to access to other folders:](#to-access-to-other-folders)
    1. [1. add IIS_IUSRS group permission to that folder:](#1-add-iisiusrs-group-permission-to-that-folder)
    2. [2. add the pool identity of that the pool name](#2-add-the-pool-identity-of-that-the-pool-name)

<!-- /TOC -->

<a id="markdown-to-access-to-other-folders" name="to-access-to-other-folders"></a>
#to access to other folders: 
<a id="markdown-1-add-iisiusrs-group-permission-to-that-folder" name="1-add-iisiusrs-group-permission-to-that-folder"></a>
##1. add IIS_IUSRS group permission to that folder:
<a id="markdown-2-add-the-pool-identity-of-that-the-pool-name" name="2-add-the-pool-identity-of-that-the-pool-name"></a>
##2. add the pool identity of that the pool name
do this:
    IIS AppPool\DefaultAppPool
or
    IIS AppPool\AspNetCore

from here:

https://www.iis.net/learn/manage/configuring-security/application-pool-identities