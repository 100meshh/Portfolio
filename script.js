// code for bfs traversal
#include<iostream>
using namespace std;
int main()
{
    int V=adj.size();
vector<bool>visited(V,0);
vector<int>ans;
queue<int>q ;
q.push(0);
visited[0]=1;

for(int i=0;i<V;i++)
{
int node=q.front();
q.pop();
ans.push_back(node);
}
for(int i=0;i<adj[node].size();i++)
{
    if(!visited[adj[node][j]])
    {
        visited[adj[node][j]]=1;
        q.push(adj[node][j]);
    }
}
return ans;

}