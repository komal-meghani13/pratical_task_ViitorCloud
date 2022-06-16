const Node = require('./node.class');

function search(node,data,key = 1)
{

    function find(node,data,key){
        
        let value = data[key];

        //if reach to end of string lenght means it's found all chat node of string
        if(key === data.length)
            return 'word found';

        if(node.child.length !== 0){
            for(let i in node.child){
                
                console.log(key+1,node.child[i].data,value)
                if(node.child[i].data === value){
                    isFound = true;
                    node = node.child[i];
                    return find(node,data, key+1);
                }                    
            }
        }

        //if match node value not found
        return 'word not found';
        
    }

    return find(node,data,key);
}

function insertNode(node, data, key = 0)
{
    
    let value = data[key];

    if(key < data.length){
        let isFound = false;

        if(node.child.length !== 0){
            for(let i in node.child){
                if(node.child[i].data === value){
                    isFound = true;
                    insertNode(node.child[i], data, key+1);                    
                    break;
                }                    
            }
        }

        //if node no exists in tree create new node
        if(!isFound){
            var newNode = new Node(value); 
            node.child.push(newNode);
            insertNode(newNode, data, key+1);
        }
        
    }
}

module.exports = {
    insertNode,
    search
};