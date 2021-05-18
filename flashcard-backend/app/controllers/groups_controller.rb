class GroupsController < ApplicationController
  def index 
    render json: Group.all
  end

  def create
    # check if saves 
    group = Group.create(group_params)
    render json: group
  end 

  private

  def group_params
    params.require(:group).permit(:name)
  end 
end
