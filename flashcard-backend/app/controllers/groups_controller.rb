class GroupsController < ApplicationController
  def index 
    render json: Group.all
  end

  def show
    group = Group.find_by_id(params[:id])
    render json: group
  end 

  def create
    # check if saves 
    group = Group.create(group_params)
    render json: group
  end 


  def group_params
    params.require(:group).permit(:name)
  end 
end
